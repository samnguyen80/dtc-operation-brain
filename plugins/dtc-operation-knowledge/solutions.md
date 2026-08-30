# DTC Operations Solutions

The objective is not to eliminate every exception. It is to make exceptions visible, owned, time-bound, and economically measurable.

## Problem → operating system

| Domain | System / solution | Default owner | KPI | Cadence |
|---|---|---|---|---|
| Order-to-cash | Define an order state machine and pre-WMS hold gate; validate fraud/address, decompose bundles, allocate inventory, make webhook processing idempotent; create an aging exception queue; reconcile order/refund/dispute → payout → bank/GL | Ops Lead + Controller | Unfulfilled aging, order cycle time, perfect-order rate, unreconciled amount, duplicate/replayed event count | Daily exceptions; monthly close |
| Inventory | SKU-location master; baseline forecast plus promo/event overlay; ABC segmentation; safety stock; reorder point; open-PO tracker | Inventory Planner / COO | In-stock rate, days cover, sell-through, turns, aged inventory, forecast bias/WAPE | Daily A-SKU exceptions; weekly replenishment; monthly S&OP |
| Supplier and QC | Approved supplier list; versioned spec/BOM; golden sample; per-lot inspections; lot traceability; CAPA; backup supplier for critical SKUs | Sourcing + QA | Supplier OTIF, actual lead time, first-pass yield, defect rate, landed-cost variance, CAPA age | Per lot; monthly scorecard; quarterly QBR |
| 3PL and fulfillment | Contractual SLA/rate card; ASN and receiving checklist; scan pick/pack; cycle counts; cut-off calendar; seed orders; packaging/DIM-weight review; 3PL and carrier invoice audit; peak plan | Fulfillment Manager | Perfect order, on-time ship, pick accuracy, dock-to-stock, cost/order, billed vs expected freight, inventory accuracy, damage/loss | Daily dashboard; weekly RCA; monthly invoice audit; quarterly QBR |
| Delivery exceptions | Proactive tracking; address validation; carrier exception queue; reship/refund decision tree; claim evidence pack; lane scorecard | Fulfillment + CX | Delivery success, late/lost/damage rate, WISMO contacts/100 orders, claim recovery | Daily |
| CX and returns | Ticket taxonomy; macros with guardrails; priority SLAs; self-service; RMA workflow; exchange-first where appropriate; closed-loop VOC | Head of CX | Contact rate/100 orders, first response, resolution time, reopen rate, CSAT, return rate by SKU/reason, refund lag | Daily queue; weekly VOC; monthly policy review |
| Fraud and disputes | AVS/CVV/3DS where relevant; risk-based hold/review/cancel rules; manual capture for high risk; evidence pack and dispute calendar | Payments/Risk DRI | Fraud loss/revenue, high-risk rate, dispute rate, win rate, false-positive cancellations | Daily review; weekly pattern analysis |
| Finance and cash | Accrual books; SKU-level landed cost; order-level contribution margin; inventory subledger; 13-week cash forecast; purchasing commitments | Controller / CFO | Gross margin, CM1/CM2, DIO/DSO/DPO, cash-to-cash, cash forecast variance, close duration | Daily cash/payout; weekly cash forecast; monthly close |
| Systems and data | Declare one system of record per object; SKU/location/channel dictionary; integration map; retry/idempotency logs; access review; app register | Ops Systems / Data | Sync failures, stale-data age, unmapped SKUs/orders, duplicates, completeness, incident MTTR | Daily health check; monthly audit |
| Team and SOP | RACI/DRI per process; approval limits; control tower; SOP library; incident postmortem; backup owner | COO | Queue aging, SLA attainment, recurrence, decision latency, SOP coverage, single-person dependencies | Daily/weekly/monthly/quarterly rhythm |
| Compliance | Product × market × channel register; claims substantiation; label approval gate; consent/cancel logs; tax review; recall and incident SOP | Compliance DRI + counsel | Open/overdue issues, complaint age, access-review completion, traceability time | Before launch; monthly/quarterly |

## Core formulas

- `Reorder point = average daily demand × replenishment lead time + safety stock`.
- `Days cover = sellable inventory / average units sold per day`.
- `Sell-through = units sold / (units sold + ending inventory)`.
- `Inventory turns = COGS / average inventory`.
- `Forecast bias = Σ(forecast − actual) / Σ(actual)`.
- `WAPE = Σ|actual − forecast| / Σ(actual)`.
- `Supplier OTIF = complete PO lines received on or before committed date / due PO lines`.
- `Perfect order rate = complete, correct, on-time, undamaged orders with correct documentation / total orders`.
- `Return rate = returned units / delivered units`, segmented by SKU, variant, reason, supplier, and lot where possible.
- `Contribution margin = net sales − landed COGS − payment fees − fulfillment − shipping subsidy − returns/refunds − other variable channel/support costs`.
- `Cash-to-cash cycle = DIO + DSO − DPO`.

Shopify documents inventory reports including sell-through and remaining inventory, and explains reorder-point and turnover calculations: [inventory reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/inventory-reports), [reorder point](https://www.shopify.com/blog/reorder-point), [inventory turnover](https://www.shopify.com/blog/what-is-inventory-turnover).

## Intervention triggers

These are trigger patterns, not universal numeric benchmarks:

- Projected A-SKU availability falls below remaining lead time plus the chosen safety-stock horizon.
- A supplier misses its committed date or a lot fails its acceptance rule.
- Perfect-order or on-time-ship performance misses the contractual SLA for two review periods.
- The 3PL invoice contains an unapproved fee code or exceeds the contract tolerance.
- Physical inventory differs from the ledger beyond the brand's unit/value tolerance.
- An order/refund/dispute/payout/bank difference remains unresolved after its settlement window.
- Return, defect, or contact rate for one SKU/lot moves beyond its baseline/control limit.
- The 13-week cash forecast shows trough cash below committed POs, payroll, tax, debt, and fixed obligations.
- Fraud surges: switch affected orders to review/manual-capture mode before fulfillment.
- A claim, label, subscription flow, or market requirement lacks an owner and evidence: block launch.

## High-leverage controls

### Inventory

1. Make A/hero SKUs visible daily.
2. Separate baseline demand from campaign, launch, wholesale, and seasonal uplift.
3. Version the forecast so bias and overrides can be audited.
4. Calculate available-to-promise from sellable stock, inbound, commitments, holds, and bundle components.
5. Connect every proposed PO to its cash requirement and expected arrival date.

Shopify's ABC report describes A-grade items as the products needing the strongest availability controls and earlier replenishment; it also warns that excess low-value stock ties up cash: [ABC inventory analysis](https://help.shopify.com/en/manual/products/inventory/adjusting-inventory/abc-analysis).

### Supplier and QC

1. Do not approve production from a chat message; use a versioned specification/BOM.
2. Preserve a signed or sealed golden sample.
3. Define pre-production, in-process, pre-shipment, and receiving checks based on product risk.
4. Track defects by supplier, lot, batch, and failure mode.
5. CAPA must have containment, root cause, corrective action, preventive action, owner, due date, and verification.

### 3PL and fulfillment

1. Put cut-off, receiving, accuracy, loss/damage, inventory reporting, peak capacity, credits, and exit/data rights into the contract.
2. Require ASN and receiving evidence.
3. Use barcode/scan controls for pick, pack, putaway, kitting, and cycle count where complexity warrants it.
4. Send seed orders and audit invoices rather than treating the 3PL as set-and-forget.
5. Keep a documented carrier and fulfillment contingency plan.
6. Review packaging dimensions and billable weight by SKU/order profile; branding choices can create recurring DIM-weight cost.
7. Audit carrier invoices and recover eligible claims instead of treating billed freight as automatically correct.

Shopify documents self-fulfillment, third-party fulfillment, split methods, order routing, and customer delivery settings: [fulfilling orders](https://help.shopify.com/en/manual/fulfillment/fulfilling-orders), [fulfillment setup](https://help.shopify.com/en/manual/fulfillment/setup/index).

### CX, returns, and disputes

1. Use reason and subreason codes that can point to PDP, product, supplier/lot, fulfillment, carrier, or policy.
2. Route WISMO to proactive tracking and delivery-exception management, not only more agents.
3. Use a controlled RMA: request → authorize → receive → inspect → disposition → refund/exchange → restock/liquidate.
4. Send weekly VOC back to Product, QA, PDP/CRO, and Fulfillment.
5. Preserve order, payment, delivery, customer communication, policy, and consent evidence for disputes.

Shopify supports configured return windows, fees, final-sale rules, self-service requests, inspection, exchanges, and refund processing: [return rules](https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/return-rules), [processing returns](https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/creating-returns). Shopify also recommends reviewing suspicious orders before fulfillment and tracking dispute patterns: [fraud analysis](https://help.shopify.com/en/manual/orders/fraud-analysis), [chargeback monitoring](https://help.shopify.com/en/manual/payments/chargebacks/chargeback-monitoring).

### Finance and reconciliation

1. Calculate landed cost, not only factory unit cost.
2. Separate gross sales, net sales, gross margin, contribution margin, cash movement, and accounting profit.
3. Reconcile gateway/order activity to payout batches, bank deposits, and GL.
4. Maintain an inventory subledger and investigate physical/ledger variance.
5. Reforecast cash weekly for 13 weeks, including open and committed POs.

Shopify explicitly notes that payout activity is not a revenue statement and provides reports for payout reconciliation and order-level profit: [payments activity](https://help.shopify.com/en/manual/payments/shopify-payments/payouts/payouts-activity-report), [finance reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/finances-report), [profit reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/profit-reports).

## Compliance pointers

- Shipping promises and delay/refund handling: [FTC Mail, Internet, or Telephone Order Merchandise Rule guide](https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule).
- Health-product claims must be substantiated: [FTC Health Products Compliance Guidance](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance).
- Cosmetic claims can change the regulatory classification of a product: [FDA cosmetic labeling claims](https://www.fda.gov/cosmetics/cosmetics-labeling/cosmetics-labeling-claims).
- Food and supplement production may require category-specific current good manufacturing practices: [FDA cGMP resources](https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/current-good-manufacturing-practices-cgmps-food-and-dietary-supplements).
- Tax registration, collection, filing, and remittance remain merchant responsibilities and vary by jurisdiction: [Shopify US tax guidance](https://help.shopify.com/en/manual/taxes/us/navigating-us-tax-regulations).
- International duties/taxes depend on market setup and fulfillment terms: [Shopify duties and import taxes](https://help.shopify.com/en/manual/international/duties-and-import-taxes).
- Subscription/negative-option requirements are jurisdiction- and date-sensitive. The FTC was seeking input on related regulation in March 2026, so do not treat a summary of “Click-to-Cancel” as a universal current rule: [FTC rule page](https://www.ftc.gov/legal-library/browse/rules/negative-option-rule).

This section is not legal, accounting, or tax advice. Recheck the applicable law and use qualified counsel.
