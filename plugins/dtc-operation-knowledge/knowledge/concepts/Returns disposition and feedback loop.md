---
source: "DTC operations video corpus"
verified: 2026-08-29
drift-risk: medium
title: Returns disposition and feedback loop
related:
  - "[[CX as an operations sensor]]"
  - "[[Supplier quality gate]]"
  - "[[Order payout and GL reconciliation]]"
---

# Returns disposition and feedback loop

A return is not finished when the customer prints a label or receives a refund. It closes only when the unit, customer outcome, inventory state, and financial entries agree.

```text
request / eligibility
→ route and receive
→ inspect with condition + reason
→ restock / refurbish / liquidate / donate / destroy
→ exchange / credit / refund
→ reconcile inventory, payout, tax, COGS, and return cost
→ feed root cause to the owning process
```

Use controlled reason and disposition codes. “Other” should be investigated, not become the dominant category. Analyze returns by SKU/variant, lot/supplier, campaign/PDP promise, geography/carrier, customer cohort, and time-to-return.

Returnless refund, exchange incentive, restocking fee, and policy windows are economic decisions with customer, fraud, and compliance trade-offs—not universal best practices.

Sources: [[6Ue-nRwlTSI]], [[jEcZ6dMP5UE]], [[AdCcKWdjhbE]].

