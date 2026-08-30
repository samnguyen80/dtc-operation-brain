#!/usr/bin/env node

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const manifestPath = join(root, "_raw", "manifest.tsv");
const subtitleDir = join(root, "_raw", "subtitles");
const outputDir = join(root, "_raw", "text");

const rows = readFileSync(manifestPath, "utf8")
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => {
    const [domain, videoId, channel, title, watchUrl] = line.split("\t");
    return { domain, videoId, channel, title, watchUrl };
  });

const metadata = new Map(rows.map((row) => [row.videoId, row]));

function decodeEntities(text) {
  return text
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value)));
}

function cleanPayload(lines) {
  return decodeEntities(
    lines
      .join(" ")
      .replace(/<\/?c[^>]*>/g, "")
      .replace(/<\d\d:\d\d:\d\d\.\d+>/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function timestampToSeconds(value) {
  const parts = value.split(":").map(Number);
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

function formatTimestamp(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
    : `${minutes}:${String(secs).padStart(2, "0")}`;
}

function appendNonOverlapping(words, incoming) {
  if (!incoming.length) return;
  const max = Math.min(words.length, incoming.length);
  let overlap = 0;
  for (let size = max; size > 0; size -= 1) {
    let matches = true;
    for (let i = 0; i < size; i += 1) {
      if (words[words.length - size + i].toLowerCase() !== incoming[i].toLowerCase()) {
        matches = false;
        break;
      }
    }
    if (matches) {
      overlap = size;
      break;
    }
  }
  words.push(...incoming.slice(overlap));
}

function parseVtt(raw) {
  const blocks = raw.replaceAll("\r\n", "\n").split(/\n\n+/);
  const cues = [];
  for (const block of blocks) {
    const lines = block.split("\n").filter(Boolean);
    const timingIndex = lines.findIndex((line) => line.includes(" --> "));
    if (timingIndex === -1) continue;
    const start = lines[timingIndex].split(" --> ")[0].trim();
    const payload = cleanPayload(lines.slice(timingIndex + 1));
    if (!payload) continue;
    cues.push({ start: timestampToSeconds(start), payload });
  }
  return cues;
}

function transcriptParagraphs(cues) {
  const paragraphs = [];
  let bucketStart = null;
  let bucketWords = [];
  let lastCueStart = null;

  const flush = () => {
    if (!bucketWords.length) return;
    paragraphs.push(`[${formatTimestamp(bucketStart)}] ${bucketWords.join(" ")}`);
    bucketWords = [];
  };

  for (const cue of cues) {
    if (bucketStart === null) bucketStart = cue.start;
    const gap = lastCueStart === null ? 0 : cue.start - lastCueStart;
    if (cue.start - bucketStart >= 60 || gap >= 8 || bucketWords.length >= 180) {
      flush();
      bucketStart = cue.start;
    }
    appendNonOverlapping(bucketWords, cue.payload.split(" "));
    lastCueStart = cue.start;
  }
  flush();
  return paragraphs;
}

function yamlString(value) {
  return JSON.stringify(value);
}

mkdirSync(outputDir, { recursive: true });

const files = readdirSync(subtitleDir).filter((name) => name.endsWith(".vtt"));
let written = 0;

for (const filename of files) {
  const videoId = basename(filename).replace(/\.en\.vtt$/, "");
  const row = metadata.get(videoId);
  if (!row) {
    console.warn(`Skipping unlisted subtitle: ${filename}`);
    continue;
  }
  const cues = parseVtt(readFileSync(join(subtitleDir, filename), "utf8"));
  const paragraphs = transcriptParagraphs(cues);
  const markdown = `---
title: ${yamlString(row.title)}
channel: ${yamlString(row.channel)}
source: ${yamlString(row.watchUrl)}
domain: ${yamlString(row.domain)}
transcript-source: "YouTube captions"
distilled: false
---

# ${row.title}

- **Channel:** ${row.channel}
- **Watch:** ${row.watchUrl}
- **Raw captions:** [../subtitles/${filename}](../subtitles/${filename})

> Raw transcript for research. Captions may contain recognition errors. Do not treat figures or claims as verified.

${paragraphs.join("\n\n")}
`;
  writeFileSync(join(outputDir, `${videoId}.md`), markdown);
  written += 1;
}

console.log(`Normalized ${written}/${rows.length} transcripts.`);
