import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "_raw", "manifest.tsv");
const metadataPath = path.join(root, "_raw", "metadata.tsv");
const outputPath = path.join(root, "knowledge", "sources", "Source index.md");

function rows(file) {
  const [header, ...lines] = fs.readFileSync(file, "utf8").trim().split(/\r?\n/);
  const keys = header.split("\t");
  return lines.map((line) => Object.fromEntries(line.split("\t").map((value, index) => [keys[index], value])));
}

const manifest = rows(manifestPath);
const metadata = new Map(rows(metadataPath).map((row) => [row.video_id, row]));
const domains = new Map();

for (const row of manifest) {
  if (!domains.has(row.domain)) domains.set(row.domain, []);
  domains.get(row.domain).push({ ...row, ...metadata.get(row.video_id) });
}

const lines = [
  "---",
  "title: DTC Operations source index",
  "verified: 2026-08-29",
  "---",
  "",
  "# Source index",
  "",
  `**${manifest.length} videos** with raw VTT, normalized transcript, and a transcript-grounded source card. Figures from speakers and vendor case studies are **[claimed]**.`,
  "",
];

for (const [domain, items] of domains) {
  lines.push(`## ${domain}`, "", "| Source | Channel | Date | Duration | Evidence |", "|---|---|---:|---:|---|");
  for (const item of items) {
    const date = item.upload_date ? `${item.upload_date.slice(0, 4)}-${item.upload_date.slice(4, 6)}-${item.upload_date.slice(6, 8)}` : "—";
    lines.push(`| [[${item.video_id}|${item.title.replaceAll("|", "\\|")}]] | ${item.channel.replaceAll("|", "\\|")} | ${date} | ${item.duration || "—"} | [Watch](${item.watch_url}) · [raw](../../_raw/text/${item.video_id}.md) |`);
  }
  lines.push("");
}

fs.writeFileSync(outputPath, `${lines.join("\n")}\n`);
console.log(`Wrote ${outputPath} (${manifest.length} sources).`);

