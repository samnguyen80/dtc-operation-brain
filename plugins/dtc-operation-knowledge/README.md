# DTC Operations

Research synthesis for founder/operators of product-based DTC and ecommerce brands.

Growth creates demand. Operations turns that demand into an order that is correctly sourced, delivered, supported, reconciled, and profitable.

## Core loop

```text
Demand plan
→ PO / production
→ QC / inbound
→ order / payment / fraud review
→ allocation
→ pick / pack / ship
→ delivery / exceptions
→ CX / return / refund
→ payout / bank / GL reconciliation
→ contribution margin + cash forecast
→ feedback to forecast, supplier, product, PDP, and growth
```

The recurring DTC failure loop is:

> Scale growth → place larger POs → cash gets trapped → forecast misses or stockouts → fulfillment and CX overload → refunds and disputes increase → payouts deteriorate → the brand cannot fund the next order.

## Documents

- [`knowledge/index.md`](knowledge/index.md): distilled KB with a foundations playbook, glossary, atomic concept notes, 36 transcript-grounded source cards, and cross-source synthesis.
- [`_raw/README.md`](_raw/README.md): evidence layer containing 36 original VTT files, 36 timestamped normalized transcripts, manifest, and YouTube metadata.
- [`prolems.md`](prolems.md): problem taxonomy and root causes. The filename preserves the original requested spelling.
- [`solutions.md`](solutions.md): problem-to-system mapping, owners, KPIs, formulas, and intervention triggers.
- [`operating-system.md`](operating-system.md): maturity model, 90-day implementation roadmap, operating cadence, and templates.
- [`youtube-sources.md`](youtube-sources.md): curated YouTube channels and starting videos for DTC operations.
- [`research-notes.md`](research-notes.md): fan-out status, research method, source hierarchy, and caveats.

Validation: `node scripts/validate-corpus.mjs` from this directory, or `node plugins/dtc-operation-knowledge/scripts/validate-corpus.mjs` from the repository root.

## Four operating systems

1. Inventory, sourcing, and working capital.
2. Physical flow: inbound, fulfillment, delivery, returns, and inventory ledger.
3. Post-purchase economics: CX, refunds, disputes, tax, reconciliation, and contribution margin.
4. Management: master data, ownership, SOPs, controls, and operating cadence.

## Guardrails

- Do not use one benchmark across all DTC categories. Targets must come from the customer promise, category economics, brand baseline, and contractual SLAs.
- Revenue and order volume are only maturity proxies. Complexity grows with SKU count, nodes, channels, lead time, product regulation, and the number of systems allowed to change inventory.
- Treat vendor case-study numbers as **claimed**, not universal benchmarks.
- Legal and compliance material is a research pointer, not legal or tax advice. Recheck the current rule and jurisdiction before acting.

Verified: 2026-08-29.
