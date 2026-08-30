import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "_raw", "manifest.tsv");
const sourceDir = path.join(root, "knowledge", "sources");

const domainConcepts = {
  "operator-governance": ["Operations control tower", "Operating cadence and decision rights", "Contribution margin and cash conversion cycle", "3PL governance"],
  "operator-overview": ["Operations control tower", "Operating cadence and decision rights", "Promotion supply gate", "Inventory truth and master data"],
  "inventory-planning": ["Demand plan and reorder point", "Open-to-buy and PO cash calendar", "Inventory truth and master data"],
  planning: ["Demand plan and reorder point", "Open-to-buy and PO cash calendar", "Promotion supply gate"],
  sourcing: ["Supplier quality gate", "Open-to-buy and PO cash calendar", "Inventory truth and master data"],
  "fulfillment-model": ["3PL governance", "Delivery exception queue", "Contribution margin and cash conversion cycle"],
  fulfillment: ["3PL governance", "Delivery exception queue", "Warehouse inbound and inventory accuracy"],
  warehouse: ["Warehouse inbound and inventory accuracy", "Inventory truth and master data", "Operating cadence and decision rights"],
  returns: ["Returns disposition and feedback loop", "CX as an operations sensor", "Order payout and GL reconciliation"],
  "customer-experience": ["CX as an operations sensor", "Delivery exception queue", "Returns disposition and feedback loop"],
  finance: ["Contribution margin and cash conversion cycle", "Order payout and GL reconciliation", "Inventory truth and master data"],
  erp: ["Inventory truth and master data", "Order payout and GL reconciliation", "Operating cadence and decision rights"],
};

const lines = fs.readFileSync(manifestPath, "utf8").trim().split(/\r?\n/).slice(1);
let changed = 0;

for (const line of lines) {
  const [domain, videoId] = line.split("\t");
  const concepts = domainConcepts[domain];
  if (!concepts) throw new Error(`No concept mapping for domain: ${domain}`);
  const file = path.join(sourceDir, `${videoId}.md`);
  const original = fs.readFileSync(file, "utf8");
  const replacement = `## Related concepts\n\n${concepts.map((concept) => `[[${concept}]]`).join(" · ")}\n`;
  if (!/## Related concepts\s*\n[\s\S]*?(?=\n## )/.test(original)) throw new Error(`Related concepts section missing: ${videoId}`);
  const updated = original.replace(/## Related concepts\s*\n[\s\S]*?(?=\n## )/, replacement);
  fs.writeFileSync(file, updated);
  changed += 1;
}

console.log(`Normalized Related concepts in ${changed} source cards.`);
