---
source: "DTC operations video corpus"
verified: 2026-08-29
drift-risk: high
title: Delivery exception queue
related:
  - "[[CX as an operations sensor]]"
  - "[[3PL governance]]"
---

# Delivery exception queue

Shipping confirmation is not delivery. Create an owned queue for shipments that miss the expected state transition: label not moving, delayed, address problem, delivery attempt, damage, loss, or delivered-not-received.

## Queue logic

- Normalize carrier events into operational states.
- Set thresholds from service promise, route, and carrier—not one universal delay.
- Proactively notify the customer when action or expectation-setting is possible.
- Define evidence and decision rules for trace, claim, reship, refund, or deny/escalate.
- Reconcile carrier claims and reship/refund cost.
- Feed patterns into carrier, packaging, warehouse, fraud, and PDP decisions.

WISMO contact rate is a lagging symptom. Leading controls include label-to-first-scan time, exception age, route/carrier delay, and proactive-notification coverage.

Sources: [[VoFp2fRfAQk|fulfillment network trade-offs]], [[l7vBMdqOcow|support as a value loop]], [[M-2XFCnQkHE|3PL partnership]].

