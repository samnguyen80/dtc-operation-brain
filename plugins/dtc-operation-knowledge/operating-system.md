# DTC Operations Operating System

## Maturity model

Use order volume and revenue only as rough proxies. Move up a level earlier when SKU count, product regulation, channels, markets, nodes, subscription, wholesale, or lead times increase complexity.

### Level 1 — Founder-led

Typical context: pre-launch to roughly 100–500 orders/month.

- One controlled SKU master.
- Daily order-exception sheet.
- Weekly physical count for hero SKUs.
- Basic reorder logic and open-PO calendar.
- Per-lot QC against an approved sample/spec.
- Documented shipping and return promise.
- Basic payout reconciliation and rolling 13-week cash forecast.
- Five to ten core SOPs; founder remains directly involved.

### Level 2 — Repeatable

Typical context: roughly 500–2,000 orders/month, one 3PL, Shopify plus one additional channel.

- Named Ops and CX owners with backups.
- Barcode/scan workflow where appropriate.
- Formal 3PL rate card and SLA.
- RMA and return-reason taxonomy.
- SKU-level reorder sheet and supplier scorecard.
- Monthly close and weekly cross-functional ops review.
- Contribution margin by SKU/channel.

### Level 3 — Controlled

Typical context: roughly 2,000–5,000 orders/month or material omnichannel complexity.

- Inventory planner and controller/finance lead.
- Rolling baseline/event forecast and monthly S&OP.
- Lot/QC/CAPA system.
- Automated fraud, WISMO, and integration exception flows.
- Master-data governance and system-of-record map.
- Supplier/3PL scorecards and quarterly reviews.

### Level 4 — Scalable

Typical context: roughly 5,000–10,000+ orders/month, multiple nodes/channels/markets, wholesale, or regulated products.

- OMS/WMS/ERP or integration control layer only where complexity justifies it.
- Multi-node allocation and capacity scenarios.
- Backup suppliers, carriers, processors, and fulfillment paths.
- Formal internal controls, compliance register, recall, business continuity, and disaster recovery.
- COO/VP Ops, FP&A, functional owners, succession, and tested decision rights.

## 90-day implementation

### Days 1–30 — Establish truth

1. Map order-to-cash and product-to-customer flows.
2. Normalize SKU, BOM/bundle, location, channel, order, and payment master data.
3. Reconcile Shopify, 3PL, payment, and accounting data for top SKUs and recent payouts.
4. Calculate landed cost and contribution margin after fulfillment and returns.
5. Build a rolling 13-week cash forecast including open and committed POs.
6. Baseline inventory, receiving, fulfillment, delivery, tickets, returns, refunds, fraud, and disputes.
7. Classify ticket, return, dispute, and inventory-adjustment reasons.
8. Create a risk register for supplier, 3PL, carrier, processor, claims, tax, privacy, and product safety.

Output: one set of numbers, one owner per exception class, and visibility into immediate cash/stock/customer risk.

### Days 31–60 — Install controls

1. Set reorder logic and alerts for A/hero SKUs.
2. Add supplier spec, golden sample, QC checklist, lot traceability, and CAPA.
3. Put 3PL SLA, seed orders, cycle count, invoice audit, and peak calendar into the operating rhythm.
4. Build payout/refund/dispute reconciliation.
5. Implement RMA and return disposition.
6. Define RACI, approval limits, backup owners, and escalation paths.
7. Publish the weekly scorecard and SOPs for the highest-volume exceptions.
8. Review packaging dimensions, DIM-weight exposure, carrier billing variance, and claim recovery.

Output: exceptions become controlled workflows rather than founder interruptions.

### Days 61–90 — Stress-test and scale

1. Run scenarios for promo uplift, supplier delay, defect batch, 3PL outage, carrier disruption, fraud surge, and payment reserve.
2. Require supply/capacity sign-off before major growth events.
3. Test backup supplier/carrier/fulfillment options for critical products.
4. Set intervention thresholds from brand economics, baseline, customer promise, and contracts.
5. Run supplier and 3PL QBRs.
6. Conduct an incident/recall/business-continuity tabletop exercise where category risk warrants it.
7. Remove the founder from routine approvals by documenting decision rights.

Output: the operating system can absorb growth and recover from predictable failures.

## Operating cadence

### Daily control tower

- Orders stuck by status and age.
- High-risk payments waiting for decision.
- A-SKU availability, inbound delays, and negative/oversold inventory.
- Receiving, fulfillment, carrier, and delivery exceptions.
- CX backlog, WISMO, urgent product/safety complaints, refund aging.
- Payout/cash exceptions.

Every row needs an owner, next action, and deadline.

### Weekly operations review

- A-SKU forecast, cover, proposed POs, and cash impact.
- Supplier and 3PL misses plus RCA/CAPA.
- Returns, defects, WISMO, disputes, and VOC by reason/SKU/lot.
- Contribution margin and 13-week cash forecast.
- Repeated exceptions and SOP changes.
- Upcoming promos, launches, channel changes, and capacity sign-off.

### Monthly

- S&OP: demand, supply, inventory, capacity, promo, and cash plan.
- Accounting close, inventory subledger, payout reconciliation, margin by SKU/channel.
- Supplier and 3PL scorecards; invoice and access/app audit.
- Aged inventory, markdown/liquidation decisions, and forecast performance.
- Compliance register and open issues.

### Quarterly

- Supplier and 3PL QBRs.
- Scenario planning and business-continuity review.
- Tax/compliance/legal review by market/category.
- System access, vendor concentration, backup coverage, and insurance review.
- SOP audit and cross-training test.

## Templates

### Daily control tower

`object/order ID | status | exception code | age | value/risk | owner | next action | deadline | resolution`

### SKU replenishment

`SKU/location | sellable | committed | inbound | demand history | event uplift | forecast | lead-time range | safety stock | reorder point | proposed PO | cash date/amount`

### PO and vendor record

`supplier | spec/BOM version | golden sample | MOQ | unit/landed cost | Incoterm | committed dates | QC plan | lot/batch | received variance | CAPA`

### 3PL scorecard

`received | fulfilled | delivered | perfect orders | cycle time | accuracy | damage/loss | cost/order | SLA credits | invoice variance | open RCA`

### RMA

`order | SKU/variant/lot | reason/subreason | photos | received condition | disposition | refund/exchange | shipping cost | recovered value | owner`

### Payout reconciliation

`gateway transaction | order/refund/dispute | payout batch | bank deposit | GL account | difference | aging | owner`

### SOP

`purpose | trigger | owner/backup | inputs | steps | decision tree | controls/evidence | SLA | exception/escalation | output | KPI | revision date/owner`

### Incident / RCA / CAPA

`impact | timeline | containment | root cause | contributing factors | corrective action | preventive action | owner/date | verification`

### Compliance register

`market | product/category | channel | requirement | evidence | owner | review/renewal date | change trigger | open action`

### 13-week cash forecast

`opening cash | gateway inflows | operating outflows | committed/open POs | freight/duties | payroll/tax/debt | ending/trough cash | variance vs prior forecast`

## Category deltas

- **Apparel:** size/variant forecasting, fit taxonomy, exchange-first returns, seasonality, markdown, and aged inventory.
- **Beauty:** batch/lot traceability, packaging compatibility, contamination and claims review.
- **Supplements:** supplier qualification, COA/testing, cGMP, claims substantiation, adverse-event and recall procedures.
- **Consumables:** FEFO, shelf life/expiry, temperature control if required, and separate repeat-demand forecasting.
- **Durable goods:** serial numbers, warranty reserve, repair/refurbish, spare parts, and replacement workflow.
- **Subscription:** consent evidence, renewal/cancellation rules by jurisdiction, skip/pause/cancel, dunning, and involuntary churn.
- **International:** HS code, origin, duties/VAT, DDP/DAP choice, restricted goods, localized labels, and consumer return/withdrawal rights.

## Anti-patterns

- Scale marketing without inventory, cash, and fulfillment sign-off.
- Treat `on hand` as sellable inventory.
- Run absolute JIT with variable import lead times and no contingency.
- Open another warehouse only for speed without modeling fragmented inventory, cost, and tax exposure.
- Treat a 3PL as set-and-forget.
- Install ERP before master data, ownership, and reconciliation are stable.
- Release orders to the WMS before fraud/address, bundle/BOM, allocation, and duplicate-event checks pass.
- Treat packaging dimensions and carrier invoices as fixed costs that do not need review.
- Use discounts to clear overstock but never correct the forecast or purchasing rule.
- Let multiple apps write inventory.
- Keep `Other` as the largest return/ticket/adjustment reason.
- Fix repeated incidents without RCA and preventive action.
