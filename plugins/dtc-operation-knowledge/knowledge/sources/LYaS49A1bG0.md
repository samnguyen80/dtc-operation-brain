---
title: "EcommOps - China Fulfillment vs US Fulfillment"
source: "https://www.youtube.com/watch?v=LYaS49A1bG0"
verified: 2026-08-29
drift-risk: high
---

# China Fulfillment vs US Fulfillment

- **Watch:** https://youtu.be/LYaS49A1bG0
- **Date:** 2022-04-05 · 24:26
- **Channel:** EcommOps

**Thesis:** Fulfillment-location choice should be modeled from factory to customer, including inventory lead time and cash at risk; a hybrid China/local network can outperform a binary choice when routing is controlled.

## Transcript-grounded takeaways

- The direct-from-China model shortens the factory-to-fulfillment leg and can reduce the stock committed before demand is known. The video's worked example contrasts **$27,000** of inventory for a 90-day assumption with **$1,500** for five days **[claimed]**; it ignores factory lead time and must not be reused as a benchmark (0:57–3:54).
- Compare end-to-end cost: international freight into the destination country, duties, local fulfillment, receiving, storage, and final-mile shipping. The video's rates and customs assumptions were snapshots from early 2022 **[claimed]**, not current doctrine (3:54–13:39).
- Local fulfillment retains real advantages when the promise requires two-day delivery, China holidays interrupt dispatch, the product is restricted, oversized, heavy, or container-scale volume makes bulk freight economical (16:30–18:21).
- The decision need not be binary: send planned container volume to a local 3PL for base demand, use China as overflow or stockout protection, and serve other countries from the origin node when the economics support it (18:21–20:08).
- A hybrid network needs explicit routing rules and handoff points. The speaker proposes routing by geography, shipping method, inventory availability, or an agreed order-number boundary so two nodes do not fulfill the same orders (20:08–20:58).
- Before launch, send the fulfillment center a product sample, confirm dangerous-goods or liquid restrictions, inspect whether it is a real warehouse, test receiving speed, and understand the service levels of each shipping line (20:58–23:40).

## Related concepts

[[3PL governance]] · [[Delivery exception queue]] · [[Contribution margin and cash conversion cycle]]

## Source quality and vendor bias

Useful framework for total-cost and hybrid-network analysis, but EcommOps is selling China fulfillment. Shipping rates, delivery times, de minimis/customs treatment, carrier mix, service availability, and client percentages are time-sensitive commercial claims. Recalculate with current quotes and law before acting.

- **Raw transcript:** [LYaS49A1bG0.md](../../_raw/text/LYaS49A1bG0.md)
