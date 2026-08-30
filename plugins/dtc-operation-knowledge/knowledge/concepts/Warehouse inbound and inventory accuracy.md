---
source: "DTC operations video corpus"
verified: 2026-08-29
drift-risk: medium
title: Warehouse inbound and inventory accuracy
related:
  - "[[Inventory truth and master data]]"
  - "[[3PL governance]]"
---

# Warehouse inbound and inventory accuracy

Receiving is the control point where a purchase shipment becomes sellable inventory. A weak inbound process creates phantom stock, oversells, accounting variance, and delayed revenue.

## Inbound flow

```text
PO / ASN → appointment → unload → identify and count
→ inspect / quarantine → receive by SKU/lot/status
→ putaway verification → available-to-promise
```

Record shortages, overages, damage, unknown items, labeling errors, and quality holds as exceptions rather than forcing the expected PO quantity into inventory.

Use location discipline, scan verification where appropriate, cycle counts based on risk/velocity, and root-cause codes for every adjustment. Track receiving age, dock-to-stock, inventory variance, unexplained adjustments, and repeat error by supplier/process.

Sources: [[ykUTukbj6ao|warehouse inbound]], [[r3DPyO-pQzs]], [[Z1GcPUUABJc]].

