---
source: "DTC operations video corpus"
verified: 2026-08-29
drift-risk: medium
title: Inventory truth and master data
related:
  - "[[Warehouse inbound and inventory accuracy]]"
  - "[[Order payout and GL reconciliation]]"
---

# Inventory truth and master data

Inventory truth means the business can explain, by SKU and location, what is physically present, sellable, committed, in transit, damaged, returned, or under investigation—and reconcile that state to financial inventory.

## Control design

- One governed SKU master with dimensions, status, cost, supplier, and channel/location mappings.
- Explicit BOM/component logic for kits, bundles, subscriptions, and manufactured goods.
- A system-of-record matrix: which system may create or change each entity/state.
- Idempotent integrations and an exception log for failed or duplicate events.
- Cycle counts and transaction-level reconciliation; never only overwrite a variance.

“On hand” is not automatically “available to promise.” Define sellable status, reservations, holds, and channel allocation.

Sources: [[saUjxn8YRIk]], [[MhHeGrpuH2A]], [[Te8opeUSGfw]], [[-L_-hYz8MZc]].

