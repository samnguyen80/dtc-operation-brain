---
source: "DTC operations video corpus"
verified: 2026-08-29
drift-risk: medium
title: Demand plan and reorder point
related:
  - "[[Open-to-buy and PO cash calendar]]"
  - "[[Promotion supply gate]]"
  - "[[Inventory truth and master data]]"
---

# Demand plan and reorder point

Forecast at the SKU and time horizon where a buying decision is made. Split baseline, seasonality, promotion/launch lift, and explicit assumptions; then translate the forecast into inventory position and a replenishment action.

```text
Inventory position = on hand + on order - committed/backordered
Reorder point = expected lead-time demand + safety stock
```

Safety stock should respond to demand variability, lead-time variability, service policy, margin, expiry, and supply risk. A fixed “weeks of cover” benchmark can hide those differences.

## Review

- Daily: hero SKU stockout/oversell risk.
- Weekly: cover, inbound risk, forecast error and bias, aged inventory.
- Monthly: demand/supply scenarios and inventory/cash commitment.

Failure modes include forecasting total sales instead of SKU demand, using average lead time without variability, ignoring committed inventory, and letting MOQ become the demand forecast.

Sources: [[n25p5tKMg2A]], [[qPhyxbbgUr0]], [[jxH1oEGP-iE]], [[xVLGU9i8t5o]].

