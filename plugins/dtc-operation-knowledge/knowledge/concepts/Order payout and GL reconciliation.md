---
source: "DTC operations video corpus"
verified: 2026-08-29
drift-risk: high
title: Order payout and GL reconciliation
related:
  - "[[Inventory truth and master data]]"
  - "[[Contribution margin and cash conversion cycle]]"
---

# Order payout and GL reconciliation

An ecommerce transaction passes through store, gateway, processor, bank, inventory system, returns platform, and accounting. Reconciliation proves that the operational event and financial recognition agree.

## Control chain

```text
order / tax / discount / shipping
→ payment / fee / reserve
→ fulfillment / inventory movement / COGS
→ cancel / return / refund / dispute
→ payout
→ bank deposit
→ GL and inventory subledger
```

Use stable transaction IDs, daily or payout-level control totals, and a queue for timing differences, duplicates, missing events, incorrect mappings, and unexplained manual adjustments. Close an exception only with an explanation and correction in the right source—not a plug that hides the cause.

Metrics: unreconciled value/count and age, payout-to-bank variance, inventory subledger-to-GL variance, manual adjustments, failed integrations, and close time.

Sources: [[Te8opeUSGfw]], [[CzLu6UlYiZE]], [[MhHeGrpuH2A]].

