---
source: "36-video DTC operations corpus"
verified: 2026-08-29
drift-risk: medium
title: DTC Operations playbook
---

# DTC Operations playbook

Synthesis of **36 public YouTube videos** from operator-led and specialist channels. It covers the operating work that begins after growth creates demand: planning inventory, converting cash into product, moving orders, handling exceptions, closing the books, and feeding customer evidence back into product and planning.

Figures from speakers and vendor case studies are **[claimed]**. The raw evidence lives in `../../_raw/`; source cards live in `../sources/`.

## The operating loop

```text
Demand signal + promotion plan
→ SKU forecast and supply plan
→ PO / production / quality gate
→ inbound receiving and inventory ledger
→ order allocation / pick / pack / ship
→ delivery and exception management
→ CX / return / disposition / refund
→ payout / bank / inventory / GL reconciliation
→ contribution margin + cash forecast
→ decisions for growth, buying, supplier, 3PL, PDP, and product
```

The frequent failure loop is the same chain running without controls:

> Scale ads → place larger POs → cash becomes inventory → forecast misses → stockouts coexist with dead stock → fulfillment and CX overload → refunds/disputes rise → payouts deteriorate → the next PO cannot be funded.

[[Operations control tower]] exists to expose and interrupt this loop early.

## 1. Establish truth before optimizing

Three truths must reconcile:

1. **Physical:** sellable units by SKU, lot, status, and location.
2. **Commercial:** orders, cancellations, returns, discounts, fees, and refunds.
3. **Financial:** inventory asset, COGS, payout, bank deposit, liabilities, and cash.

Do not treat Shopify on-hand, a 3PL portal, or an accounting balance as automatically correct. Assign a system of record and an owner for each entity; normalize SKU and bundle/BOM mappings; then install control totals and an exception queue. See [[Inventory truth and master data]] and [[Order payout and GL reconciliation]].

This is a recurring point in the inventory/accounting sources: [[saUjxn8YRIk|inventory numbers]], [[Te8opeUSGfw|reports not matching reality]], and [[MhHeGrpuH2A|inventory systems even with a 3PL]].

## 2. Plan demand, supply, and cash together

A forecast is not one number. Separate baseline demand, seasonality, promotion/launch lift, and explicit assumptions. Convert demand into a supply plan with on-hand, committed, inbound, MOQ, lead-time variability, and safety-stock policy.

Basic control logic:

```text
Reorder point = expected demand during replenishment lead time + safety stock
Inventory position = on hand + on order - committed/backordered
Open-to-buy = planned ending inventory + planned sales - beginning inventory - on-order inventory
Cash conversion cycle = DIO + DSO - DPO
```

The formulas are starting structures, not universal settings. The policy changes by SKU velocity, margin, expiry, supply risk, and service promise. See [[Demand plan and reorder point]], [[Open-to-buy and PO cash calendar]], and the planning sources [[n25p5tKMg2A]], [[qPhyxbbgUr0]], [[eoWnAi4g268]].

Marketing must not launch a promotion without a supply and capacity sign-off. [[Promotion supply gate]] turns the growth calendar into an operations input.

## 3. Put quality before the balance payment and customer

Quality is cheapest to resolve before goods leave the supplier. A minimum gate includes:

- Product specification/tech pack and approved golden sample.
- Purchase order with acceptance criteria and change control.
- Pre-production, in-process, or pre-shipment checks proportional to risk.
- Lot/batch traceability and defect reason codes.
- Corrective and preventive action (CAPA) for repeat defects.
- Clear decision rights for release, rework, discount, or rejection.

Do not confuse lower unit cost with lower landed or failure-adjusted cost. See [[Supplier quality gate]], [[83BpzPYX-vM]], [[KrKfmWBoGSM]], and [[CcTVyz3NMb4]].

## 4. Govern the warehouse or 3PL as a controlled process

The in-house versus 3PL decision is not ideological. Compare economics, control, capital, capability, peak flexibility, geography, systems, and management attention. The trade-offs are discussed in [[Z99e80gwRRw]].

For a 3PL, make the operating contract measurable:

- Receiving/ASN requirements and dock-to-stock definition.
- Cutoff, on-time ship, order accuracy, and inventory accuracy definitions.
- Returns receiving and restock/disposition SLA.
- Rate-card assumptions, surcharges, storage logic, and invoice audit.
- Peak forecast/capacity commitments and incident escalation.
- Data access, cycle-count schedule, credits, termination, and transition plan.

Use daily exception management, weekly reconciliation, and monthly/quarterly review. See [[3PL governance]], [[Warehouse inbound and inventory accuracy]], [[M-2XFCnQkHE]], and the ShipHero warehouse series [[r3DPyO-pQzs]], [[ykUTukbj6ao]], [[Z1GcPUUABJc]].

## 5. Manage exceptions, not averages

Averages hide the orders that break trust and consume labor. Build queues for:

- Order on hold, allocation failure, or inventory mismatch.
- Receiving overdue or PO late.
- Shipment label created but not moving.
- Delivery delay, loss, damage, or address problem.
- Return received but refund/restock incomplete.
- Payout, gateway, inventory, or GL variance.

Each queue needs an owner, age, severity, next action, SLA, and escalation path. The aim is not a prettier dashboard; it is a closed exception. See [[Delivery exception queue]] and [[Operations control tower]].

## 6. Treat CX and returns as operating sensors

WISMO, defects, sizing/fit, expectation mismatch, damage, wrong item, late delivery, and refund delay should use structured reason codes. Weekly Voice of Customer review sends these signals to the responsible process: PDP, product, supplier/lot, packaging, warehouse, carrier, or policy.

Returns require an explicit reverse flow:

```text
Request → eligibility → label/routing → receive → inspect
→ restock / refurbish / liquidate / donate / destroy
→ exchange / credit / refund → financial reconciliation
```

The ReturnLogic videos are vendor-produced but useful for workflow and reason-code mechanics: [[6Ue-nRwlTSI]], [[jEcZ6dMP5UE]], [[AdCcKWdjhbE]]. For service-to-retention logic, see [[l7vBMdqOcow]]. Doctrine: [[CX as an operations sensor]] and [[Returns disposition and feedback loop]].

## 7. Run the brand on contribution and cash, not revenue alone

Gross margin misses many variable costs. Define a contribution ladder consistently, for example:

```text
Net revenue
- landed product cost
- payment fees
- fulfillment and shipping subsidy
- variable support / returns / refund leakage
- variable acquisition cost
= contribution after acquisition
```

Names such as CM1/CM2/CM3 vary; the inclusion rules matter more than the label. Review by SKU, channel, cohort, and promotion where decision-useful.

Pair the P&L with a rolling 13-week cash forecast and PO/payment calendar. A profitable brand can still be cash-poor when inventory and supplier payments precede customer cash. See [[Contribution margin and cash conversion cycle]], [[6uQBdVx1wWI]], [[7QtqFq2reMw]], [[CzLu6UlYiZE]], [[F-Y1cubdesE]], and [[e5r7-KT6mQ0]].

## 8. Install a management rhythm

| Cadence | Decision focus |
|---|---|
| Daily | Aged exceptions: order, receiving, inventory, shipment, returns, integrations, cash |
| Weekly | SKU cover/stockout risk, PO risk, fulfillment SLA, CX/returns causes, cash and contribution |
| Monthly | S&OP, close/reconciliation, inventory reserves, vendor/3PL performance, capacity |
| Quarterly | Network/supplier strategy, scenario tests, contracts, access, SOP and risk review |

Every critical process needs one accountable owner, named decision rights, a backup, a metric definition, and an escalation threshold. See [[Operating cadence and decision rights]].

## Minimum viable system by complexity

These stages are guides, not revenue rules.

### Founder-led / low complexity

- Controlled SKU master and purchase-order tracker.
- Weekly cash, inventory, and exception review.
- Landed cost and basic contribution by SKU.
- QC checklist per batch.
- Simple fulfillment and return SOPs.

### One 3PL / growing catalog and channels

- Formal 3PL SLA and reconciliation.
- SKU-level demand and replenishment review.
- Rolling 13-week cash forecast and PO calendar.
- Structured CX/returns taxonomy.
- Owner/RACI and weekly scorecard.

### Multi-node / wholesale / manufacturing complexity

- S&OP and promotion capacity gate.
- OMS/ERP/IMS/WMS responsibilities defined by entity and transaction.
- Bundle/BOM, lot, landed-cost, and allocation controls.
- Supplier and logistics scorecards.
- Monthly close, scenario planning, continuity and recall procedures.

ERP case studies [[xVLGU9i8t5o]], [[fhKnMtFuu10]], and [[-L_-hYz8MZc]] are vendor-produced; use them as architecture examples, not proof that an ERP is automatically the next step.

## First 90 days

### Days 1–30 — establish truth

1. Map order-to-cash, procure-to-stock, and return-to-refund.
2. Reconcile top SKUs across store, 3PL/warehouse, and accounting.
3. Build landed cost, contribution, a 13-week cash view, and PO payment calendar.
4. Baseline fulfillment, CX, return, and integration exceptions.
5. Name owners and top existential risks.

### Days 31–60 — install controls

1. Reorder and promotion supply gates for hero SKUs.
2. Supplier specification/QC/CAPA workflow.
3. 3PL/warehouse SLA, receiving control, and cycle counts.
4. Return reason, disposition, and refund reconciliation.
5. Weekly operations review with exception owners and decisions.

### Days 61–90 — stress-test and improve

1. Run scenarios for promotion lift, supplier delay, 3PL outage, and payout reserve.
2. Review backup capacity and sources for critical SKUs.
3. Remove founder approvals from repeatable, low-risk decisions.
4. Create monthly S&OP and close calendars.
5. Prioritize automation only after the manual control and source of truth are clear.

## Final rule

Do not buy software to resolve an undefined owner, dirty master data, or an unreconciled process. First make the decision and control explicit; then automate the repeatable part.

