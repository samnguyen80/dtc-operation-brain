---
name: ask-dtc-operations
description: "Route DTC and ecommerce store-operation questions to the right operations skill or knowledge note. Use for /dtc-ops, ambiguous operations questions, or when the user asks what operational system to inspect. Do not use for growth-only advertising or creative strategy."
---

# Ask DTC Operations

Knowledge lives in `${CLAUDE_PLUGIN_ROOT}/knowledge/`; skills route and apply it without copying doctrine.

| User intent | Route |
|---|---|
| Diagnose a live symptom, pasted metrics, or broken process | `diagnose-dtc-operations` |
| Learn a concept through a scenario | `teach-dtc-operations` |
| Browse the complete system | Read `knowledge/foundations/playbook.md` |
| Find a specific video/source | Read `knowledge/sources/Source index.md` |

For direct factual questions, read `knowledge/index.md`, then the narrowest relevant concept note. Cite its Watch sources and tag speaker/case-study figures **[claimed]**.

| Topic | Read first |
|---|---|
| Cross-functional bottleneck / cadence | `concepts/Operations control tower.md` |
| Forecast, stockout, overstock | `concepts/Demand plan and reorder point.md` |
| PO budget / inventory cash | `concepts/Open-to-buy and PO cash calendar.md` |
| Inventory mismatch / bundles / systems | `concepts/Inventory truth and master data.md` |
| Factory / supplier / defects | `concepts/Supplier quality gate.md` |
| 3PL selection or governance | `concepts/3PL governance.md` |
| Receiving / warehouse accuracy | `concepts/Warehouse inbound and inventory accuracy.md` |
| Delivery / WISMO | `concepts/Delivery exception queue.md` |
| Support / customer feedback | `concepts/CX as an operations sensor.md` |
| Returns / refund / disposition | `concepts/Returns disposition and feedback loop.md` |
| Margin / working capital | `concepts/Contribution margin and cash conversion cycle.md` |
| Payout / bank / accounting mismatch | `concepts/Order payout and GL reconciliation.md` |
| Ownership / SOP / meetings | `concepts/Operating cadence and decision rights.md` |

If the question could materially change buying, warehouse, or cash decisions, ask only for the missing data that changes the diagnosis.
