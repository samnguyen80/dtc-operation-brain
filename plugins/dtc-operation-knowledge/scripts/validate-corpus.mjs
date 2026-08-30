import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = fs.readFileSync(path.join(root, "_raw", "manifest.tsv"), "utf8").trim().split(/\r?\n/).slice(1).map((line) => {
  const [domain, videoId, channel, title, watchUrl] = line.split("\t");
  return { domain, videoId, channel, title, watchUrl };
});

const errors = [];
const ids = new Set();

for (const row of manifest) {
  if (ids.has(row.videoId)) errors.push(`Duplicate manifest id: ${row.videoId}`);
  ids.add(row.videoId);

  const expected = [
    path.join(root, "_raw", "subtitles", `${row.videoId}.en.vtt`),
    path.join(root, "_raw", "text", `${row.videoId}.md`),
    path.join(root, "knowledge", "sources", `${row.videoId}.md`),
  ];
  for (const file of expected) if (!fs.existsSync(file)) errors.push(`Missing: ${file}`);

  const textPath = expected[1];
  if (fs.existsSync(textPath)) {
    const text = fs.readFileSync(textPath, "utf8");
    if (!text.includes(row.watchUrl)) errors.push(`Normalized transcript lacks Watch URL: ${row.videoId}`);
  }

  const cardPath = expected[2];
  if (fs.existsSync(cardPath)) {
    const card = fs.readFileSync(cardPath, "utf8");
    if (!card.includes(row.watchUrl)) errors.push(`Source card lacks Watch URL: ${row.videoId}`);
    if (!card.includes(`../../_raw/text/${row.videoId}.md`)) errors.push(`Source card lacks raw link: ${row.videoId}`);
    if (!card.includes("[claimed]") && /\b\d+(?:[.,]\d+)?(?:%|x|\s*(?:million|billion|orders?|units?|days?|weeks?|months?|years?|\$))\b/i.test(card)) {
      errors.push(`Review untagged numerical claim: ${row.videoId}`);
    }
  }
}

const metadataIds = new Set(fs.readFileSync(path.join(root, "_raw", "metadata.tsv"), "utf8").trim().split(/\r?\n/).slice(1).map((line) => line.split("\t")[0]));
for (const id of ids) if (!metadataIds.has(id)) errors.push(`Missing metadata: ${id}`);
for (const id of metadataIds) if (!ids.has(id)) errors.push(`Metadata id not in manifest: ${id}`);

function markdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(fullPath);
    return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : [];
  });
}

const knowledgeFiles = markdownFiles(path.join(root, "knowledge"));
const noteNames = new Set(knowledgeFiles.map((file) => path.basename(file, ".md")));
for (const file of knowledgeFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)) {
    if (!noteNames.has(match[1])) errors.push(`Broken wiki link in ${path.relative(root, file)}: [[${match[1]}]]`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${manifest.length} videos and ${knowledgeFiles.length} knowledge notes: evidence files, metadata, Watch/raw links, and wiki links.`);
