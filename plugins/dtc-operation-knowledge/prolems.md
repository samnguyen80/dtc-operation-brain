# DTC Operations Problems

Ngoài Growth, founder/operator của DTC brand phải biến demand thành những đơn hàng được giao đúng, có lãi và có thể lặp lại. Vấn đề vận hành không nằm riêng ở warehouse: chúng chạy xuyên suốt từ demand plan đến payout, cash và feedback về product.

## Failure loop

Growth tăng → PO lớn hơn → cash bị khóa → forecast sai hoặc hết hàng → fulfillment và CX quá tải → refund/chargeback tăng → payout xấu đi → không còn tiền cho lô tiếp theo.

## 1. Inventory và demand planning

- Hết hàng đúng lúc quảng cáo đang scale.
- Nhập dư khiến tiền bị mắc kẹt trong tồn kho.
- Không dự báo được nhu cầu theo SKU, size, màu và mùa vụ.
- Lead time nhà cung cấp dài, MOQ cao.
- Không biết thời điểm reorder và số lượng cần đặt.
- Forecast ở cấp tổng doanh thu thay vì SKU × location.
- Stockout làm mất demand history nhưng dữ liệu vẫn bị hiểu là nhu cầu thấp.
- Promo calendar không được đưa vào supply và capacity plan.
- Nhầm `on hand` với lượng hàng thực sự có thể bán: available-to-promise còn phải trừ committed, hold, damage và bundle components.

## 2. Cash flow và working capital

- Có doanh thu nhưng thiếu tiền để nhập lô hàng tiếp theo.
- Meta thu tiền trước trong khi Shopify hoặc marketplace trả tiền sau.
- Tiền nằm trong inventory, 3PL và hàng đang vận chuyển.
- Không tính đủ COGS, shipping, refund, discount và transaction fee.
- Doanh thu tăng nhưng contribution margin hoặc lượng tiền mặt giảm.
- Không có lịch cash cho deposit, balance, freight, duty và open PO.
- Không có rolling 13-week cash forecast hoặc returns/dispute reserve.
- Mua theo MOQ/unit cost mà bỏ qua liquidity và tốc độ bán.

## 3. Fulfillment và logistics

- Chọn, chuyển đổi và quản lý 3PL.
- Sai đơn, giao chậm, mất hàng hoặc phí pick-and-pack tăng.
- Xử lý split shipment, international shipping và customs.
- Đồng bộ tồn kho giữa Shopify, Amazon, TikTok Shop và retail.
- Thiếu SLA và quy trình đối soát với warehouse.
- Receiving chậm làm inventory tồn tại vật lý nhưng chưa bán được.
- Cut-off, carrier pickup và customer promise không khớp nhau.
- Không có peak-capacity plan hoặc phương án 3PL/carrier dự phòng.
- 3PL invoice có surcharge hoặc fee code không được kiểm tra.

## 4. Customer support và customer experience

- Ticket “Where is my order?” chiếm phần lớn khối lượng hỗ trợ.
- Thiếu quy trình đổi trả, refund và chargeback.
- Support không biết xử lý subscription, bundle hoặc đơn lỗi.
- Thời gian phản hồi tăng khi số lượng đơn hàng tăng.
- Feedback của khách không quay lại product và marketing team.
- Ticket và return reason bị dồn vào `Other`, khiến doanh nghiệp không thấy root cause.
- Không có decision tree cho reship, refund, exchange và returnless refund.
- WISMO là symptom của tracking/delivery exceptions nhưng chỉ được xử lý bằng thêm agent.

## 5. Returns, fraud và chargebacks

- Return rate cao nhưng không biết nguyên nhân đến từ sản phẩm, expectation hay fulfillment.
- Friendly fraud, đơn hàng rủi ro và Shopify Payments hold.
- Chính sách hoàn trả quá thoáng hoặc quá khó.
- Hàng trả về không được kiểm kê và đưa lại vào kho đúng cách.
- Không có RMA flow: receive → inspect → disposition → refund/exchange → restock/liquidate.
- Fulfill high-risk order trước khi fraud review hoàn tất.
- Thiếu delivery proof, communication log và dispute evidence pack.
- Billing descriptor, shipping promise hoặc subscription terms không rõ.

## 6. Product và quality control

- Chất lượng không ổn định giữa các batch.
- Packaging bị hư hỏng hoặc làm shipping cost tăng.
- Supplier giao trễ, đổi nguyên liệu hoặc sai specification.
- Không có QC checklist, defect tracking và recall process.
- Review xấu tăng nhanh hơn khả năng sửa sản phẩm.
- Không có versioned specification, tech pack/BOM hoặc sealed golden sample.
- Không có pre-production, in-process và pre-shipment inspection.
- Không trace được defect/complaint về supplier, lot hoặc batch.
- Không có CAPA: corrective and preventive action với owner và deadline.

## 7. Store systems và data

- Quá nhiều Shopify apps, làm tăng chi phí và giảm tốc độ site.
- SKU, bundle, subscription và discount logic xung đột.
- Shopify, 3PL, helpdesk và accounting lệch số liệu.
- Không có một nguồn dữ liệu chuẩn cho revenue, margin và inventory.
- Tracking quảng cáo tốt nhưng reporting vận hành yếu.
- Nhiều hệ thống cùng được phép ghi inventory.
- Bundle, kit và subscription không có BOM nên inventory bị double count hoặc oversell.
- Không có owner cho SKU, location, channel và metric dictionary.
- Sync failure, duplicate event và stale data không có exception queue.

## 8. Finance, tax và reconciliation

- P&L đến quá muộn để hỗ trợ quyết định.
- Không đối soát được Shopify payout với refund, fee và chargeback.
- Rủi ro liên quan đến sales tax, VAT, nexus và international duties.
- Không biết lợi nhuận thực theo SKU, channel hoặc cohort.
- Founder nhìn ROAS trong khi doanh nghiệp cần contribution margin và cash conversion.
- Gross sales bị hiểu nhầm là revenue và product cost bị hiểu nhầm là landed COGS.
- Không reconcile order/refund/dispute → payout batch → bank deposit → GL.
- Inventory subledger không khớp physical count và general ledger.
- Không theo dõi tax nexus, VAT, duty và nghĩa vụ theo từng market.

## 9. People và SOP

- Founder trở thành nút thắt của mọi approval.
- Không rõ ai sở hữu inventory, CX, 3PL hoặc merchandising.
- Agency, freelancer và internal team làm việc rời rạc.
- Công việc nằm trong Slack hoặc trong đầu nhân sự, không có SOP.
- Không có scorecard và nhịp vận hành tuần.
- Không có DRI/backup cho exception queue.
- SOP không ghi trigger, input, decision rights, escalation và evidence.
- Cùng một incident lặp lại nhưng chỉ được chữa symptom, không có RCA.

## 10. Compliance và risk

- Claims đối với supplement, beauty và wellness.
- Privacy, subscription cancellation và auto-renewal.
- Product labeling, trademark và consent cho SMS/email.
- Vendor concentration và nguy cơ tài khoản thanh toán bị khóa.
- Product/health claims không có substantiation file.
- Shipping promise, consent hoặc cancellation flow không đáp ứng từng jurisdiction.
- Không có lot traceability, recall, adverse-event hoặc data-incident playbook khi category yêu cầu.

## Problem theo giai đoạn

| Giai đoạn | Failure mode dễ gặp | Hệ tối thiểu còn thiếu |
|---|---|---|
| Founder-led / pre-launch | Overbuy lô đầu, không QC, không biết landed cost | SKU master, golden sample, landed cost, reorder logic, cash forecast |
| Một store + một 3PL | Growth ăn cash, bundle lệch tồn, payout không khớp | Weekly SKU review, cycle count, 3PL SLA, payout reconciliation |
| Omnichannel / nhiều node | ATP sai, split shipment, data không đồng nhất | S&OP, OMS/location rules, master-data ownership, vendor scorecard |
| Scale / regulated category | Retail chargeback, covenant, expiry/lot/recall risk | ERP/WMS control layer, internal controls, compliance and recall system |

Doanh thu hoặc orders/month chỉ là proxy. Thước đo complexity tốt hơn là:

> SKU count × fulfillment nodes × sales channels × replenishment lead time × systems có quyền sửa inventory.

## Chuỗi tác động

Growth tăng → số lượng đơn tăng → inventory, cash, fulfillment và CX chịu áp lực → margin giảm → doanh nghiệp không thể tiếp tục scale.

Một DTC operating system nên có bốn trụ cột:

1. Inventory và supply chain.
2. Fulfillment và customer experience.
3. Finance và cash flow.
4. People và SOP.

Xem giải pháp tương ứng trong [`solutions.md`](solutions.md).
