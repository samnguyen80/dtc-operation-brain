# Research Notes

Verified: 2026-08-29.

## Fan-out status

The research was fanned out across the three requested model CLIs, then checked against official documentation and YouTube metadata.

| Branch | Invocation | Result |
|---|---|---|
| Claude Sonnet | `claude -p --model sonnet --effort medium --no-session-persistence --tools '' --output-format text '<prompt>'` | Successful taxonomy and operations synthesis. A separate web-enabled run hung and was stopped; source URLs were checked independently. |
| Grok | `grok --model grok-4.6 --reasoning-effort high --max-turns 12 --output-format plain --permission-mode dontAsk --cwd <repo> --single '<prompt>'` | Successful but long-running. The report was stopped after substantial output and the useful material was synthesized. |
| Gemini via Antigravity | `agy --model gemini-3.7-flash-high --effort high --mode plan --output-format text --print-timeout 5m --print='<prompt>'` | Successful through Antigravity CLI 1.1.22 and the authenticated Google AI Pro subscription; exit 0 after about 132 seconds. Taxonomy and control ideas were synthesized, while unsupported benchmarks and legal claims were excluded. |

Model output was treated as a source of hypotheses and structure, not factual authority.

## Consensus across successful branches

- DTC operations is an end-to-end system, not only warehouse/fulfillment.
- The critical loop connects inventory, working capital, supplier/QC, order flow, fulfillment, CX/returns, finance/reconciliation, data, ownership, and compliance.
- Growth planning must be connected to inventory, cash, and capacity.
- Master data and reconciliation should be fixed before adding ERP/automation complexity.
- A 13-week cash forecast, SKU-level landed cost, and contribution margin are foundational.
- 3PLs require contractual SLAs, exception visibility, invoice audits, test orders, and QBRs.
- Ticket, return, defect, and dispute reasons must feed Product, QA, PDP, supplier, and fulfillment decisions.
- Numeric targets are category-, promise-, contract-, and brand-specific. There is no universal DTC benchmark.

Gemini added three useful controls to the consensus set:

- An order-to-cash hold gate validates fraud/address, decomposes bundles, allocates inventory, and prevents duplicate webhook effects before release to the WMS.
- Packaging and DIM-weight must be treated as an operations-cost system, not only a branding decision.
- Carrier invoice audit and claim recovery belong in the same control loop as delivery exceptions and WISMO.

Gemini's raw artifact also contained unverified numerical ranges, impact claims, older ISO references, and overconfident legal summaries. Those were not promoted into doctrine. In particular, the KB uses ISO 2859-1:2026 and points to the current FTC rule docket rather than presenting “Click-to-Cancel” as a settled universal rule.

## Source hierarchy

1. Government/regulator and official platform documentation for laws, platform behavior, and current features.
2. ASCM/ISO and established operations frameworks for definitions and control concepts.
3. Operator-led sources for decisions, trade-offs, and failure modes.
4. Vendor channels for mechanics and implementation patterns, with commercial bias noted.
5. Model synthesis only for taxonomy, gaps, and questions to verify.

## Official and primary sources

### Inventory and Shopify operations

- [Shopify Help — inventory reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/inventory-reports)
- [Shopify Help — ABC inventory analysis](https://help.shopify.com/en/manual/products/inventory/adjusting-inventory/abc-analysis)
- [Shopify — inventory formulas](https://www.shopify.com/blog/inventory-formulas)
- [Shopify — reorder point](https://www.shopify.com/blog/reorder-point)
- [Shopify — inventory turnover](https://www.shopify.com/blog/what-is-inventory-turnover)
- [Shopify Help — fulfilling orders](https://help.shopify.com/en/manual/fulfillment/fulfilling-orders)
- [Shopify Help — fulfillment setup and order routing](https://help.shopify.com/en/manual/fulfillment/setup/index)

### Returns, payments, fraud, and finance

- [Shopify Help — return rules](https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/return-rules)
- [Shopify Help — processing returns and exchanges](https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/creating-returns)
- [Shopify Help — fraud analysis](https://help.shopify.com/en/manual/orders/fraud-analysis)
- [Shopify Help — preventing chargebacks](https://help.shopify.com/en/manual/payments/chargebacks/preventing-chargebacks)
- [Shopify Help — monitoring chargebacks](https://help.shopify.com/en/manual/payments/chargebacks/chargeback-monitoring)
- [Shopify Help — payments activity report](https://help.shopify.com/en/manual/payments/shopify-payments/payouts/payouts-activity-report)
- [Shopify Help — finance reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/finances-report)
- [Shopify Help — profit reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/profit-reports)

### Operations frameworks

- [ASCM SCOR — performance introduction](https://scor.ascm.org/performance/introduction)
- [ASCM SCOR — perfect order fulfillment](https://scor.ascm.org/performance/reliability/RL.1.1)
- [ISO 2859-1:2026 — acceptance sampling](https://www.iso.org/standard/85464.html)

### Compliance pointers

- [FTC — Mail, Internet, or Telephone Order Merchandise Rule guide](https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule)
- [FTC — Negative Option Rule docket/status](https://www.ftc.gov/legal-library/browse/rules/negative-option-rule)
- [FTC — Health Products Compliance Guidance](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance)
- [FTC — protecting personal information](https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business)
- [FDA — cosmetic labeling claims](https://www.fda.gov/cosmetics/cosmetics-labeling/cosmetics-labeling-claims)
- [FDA — food and dietary-supplement cGMP](https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/current-good-manufacturing-practices-cgmps-food-and-dietary-supplements)
- [CPSC — duty to report product hazards](https://www.cpsc.gov/Business--Manufacturing/Recall-Guidance/Duty-to-Report-to-CPSC-Rights-and-Responsibilities-of-Businesses)
- [Shopify Help — US tax regulations](https://help.shopify.com/en/manual/taxes/us/navigating-us-tax-regulations)
- [Shopify Help — duties and import taxes](https://help.shopify.com/en/manual/international/duties-and-import-taxes)
- [PCI SSC — maintaining payment security](https://listings.pcisecuritystandards.org/pci_security/maintaining_payment_security)

## Caveats

- Laws, platform features, carrier terms, and payment-processor thresholds drift. Recheck current official sources before applying them.
- FTC negative-option regulation was in an active rulemaking posture in 2026. Do not store “Click-to-Cancel” as a universal final rule without jurisdiction/date verification.
- ASCM/ISO definitions are useful foundations, but implementation must match the brand's category, customer promise, and contracts.
- Revenue/order maturity bands in this KB are planning heuristics, not benchmarks.
- YouTube sources are educational inputs, not independent proof. Vendor claims remain **claimed**.
