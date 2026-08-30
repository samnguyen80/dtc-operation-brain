---
name: diagnose-dtc-operations
description: "Diagnose operational constraints in a product-based DTC or ecommerce brand across inventory, sourcing, fulfillment, CX, returns, finance, and systems. Use when the user reports a live symptom or provides store metrics. Do not mutate live systems, place POs, or change fulfillment settings without explicit authorization."
---

# Diagnose DTC Operations

Read `${CLAUDE_PLUGIN_ROOT}/knowledge/foundations/playbook.md`, then the narrowest concept notes named in `knowledge/index.md`. Use source cards only when evidence detail or speaker context matters.

Trace the symptom through the operating loop:

```text
demand → supply/PO → quality/inbound → inventory truth
→ allocation/fulfillment → delivery/CX/returns
→ payout/accounting → contribution/cash → next decision
```

Collect only evidence that changes the decision:

- SKU, channel, node, and time period affected.
- Customer promise and current SLA definition.
- On-hand, committed, inbound, lead time, forecast assumption, and PO dates.
- Exception count/value, age, reason, owner, and recurrence.
- Landed cost, variable fulfillment/returns costs, contribution definition, and cash timing.
- Which system is authoritative and where the first unexplained variance appears.

## Output

1. **Observed symptom** — distinguish fact from interpretation.
2. **Likely constraint** — where the flow first breaks and why.
3. **Evidence still needed** — only decision-changing gaps.
4. **One next intervention** — owner, cadence/deadline, leading indicator, lagging KPI, and escalation threshold.
5. **Feedback destination** — forecast, supplier, warehouse/3PL, carrier, PDP/product, finance, or systems.
6. **Sources** — direct Watch URLs from the relevant source cards.

Avoid universal benchmarks. Derive thresholds from the brand baseline, category economics, customer promise, and contractual SLA. Mark vendor examples and speaker figures **[claimed]**. Do not recommend ERP or automation before ownership, master data, and reconciliation are defined.
