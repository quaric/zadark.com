---
title: Lịch sử thay đổi
authors: ncdai
---

## ZaDark 23.9.3

> PC 11.4 và Web 9.14

### Changed

* **\[Safari]** Chỉ yêu cầu cấp quyền truy cập nội dung và sửa đổi đối với website chat.zalo.me ([Bảo mật và quyền riêng tư](https://zadark.quaric.com/privacy-policy#bao-mat-va-quyen-rieng-tu)).
* Cập nhật giao diện Cài đặt ZaDark.

## ZaDark 23.9.2

> PC 11.3 và Web 9.13

### Fixed

* Tăng độ đậm cho nội dung được tô đậm (bold) trong tin nhắn ([#78](https://github.com/quaric/zadark/issues/78)).
* Sửa lỗi Dark Mode biểu tượng Phó nhóm ([#80](https://github.com/quaric/zadark/issues/80)).

### Added

* Bổ sung phím tắt chuyển chế độ Sáng/Tối ([#79](https://github.com/quaric/zadark/issues/79))
  * Windows: `Alt+D`
  * macOS: `⌘D`

### Removed

* Bỏ phím tắt mở Cài đặt ZaDark & thay bằng phím tắt chuyển chế độ Sáng/Tối.

## ZaDark 23.9.1

> PC 11.2 và Web 9.12

### Changed

* Cập nhật thông tin nhà phát hành thành "ZaDark by Quaric"

## ZaDark 23.8.5

> PC 11.1 và Web 9.11

### Fixed

* Sửa lỗi Dark Mode trình xem Video (Video Player)

### Changed

* Cập nhật thuật ngữ, nội dung thông báo

#### Web specific

* Cập nhật chức năng **Ẩn trạng thái (Đang soạn tin, Đã nhận, Đã xem)**: `declarative_net_request.rule_resources`
* **\[Safari]** Tối ưu Logo Quaric SVG

## ZaDark 23.8.4

> PC 11.0 và Web 9.10

### Added

#### PC specific

* Mang tính năng **Ẩn trạng thái (Đang soạn tin, Đã nhận, Đã xem)** trở lại trên **Zalo PC 23.7.1** trở lên.
  * Thay đổi lớn về Logic xử lí.
  * Cập nhật `filterUrls`.
  * **Giới hạn kĩ thuật**: Xem mục Notes bên dưới.

### Changed

* Thay đổi màu của Logo nhà phát hành Quaric.

### Notes

* Vì Zalo PC giới hạn quyền sử dụng các [API của Electron](https://www.electronjs.org/docs/latest/api/app) nên các tính năng sau sẽ bị ảnh hưởng:
  * Bật/Tắt **Ẩn trạng thái (Đang soạn tin, Đã nhận, Đã xem)**: Người dùng phải khởi động lại Zalo PC để áp dụng thay đổi.
  * **\[Windows]** Hộp thoại thông báo chỉ hỗ trợ Dark Mode trên **Zalo PC 23.7.1** trở lên. Light Mode, ẩn tin nhắn, ảnh đại diện và tên không khả dụng.
  * Mặc dù các tính năng bị ảnh hưởng, nhưng đây là điểm cộng khi Zalo luôn cải tiến mã nguồn trở nên tốt hơn.

## ZaDark 23.8.3

> PC 10.2 && Web 9.8

### Fixed

#### Web specific

* **\[Firefox]** Sửa lỗi không thể cài đặt phông chữ ([#74](https://github.com/quaric/zadark/issues/74))

### Changed

* Thay đổi màu sắc nhãn "Pro"
* Thay đổi vị trí Popup Cài đặt ZaDark

## ZaDark 23.8.2

> PC 10.1 && Web 9.7

### Added

* **\[Safari]** Gia hạn tài khoản Apple Developer, mang [**ZaDark for Safari**](/web/safari) trở lại Mac App Store
* Thêm nhãn `Pro` giúp nhận diện **ZaDark Pro**

### Changed

#### Web specific

* Cải thiện tuỳ chỉnh phông chữ từ Google
* Sửa lỗi CSP (Content Security Policy) khi tuỳ chỉnh phông chữ từ Google
* Cập nhật phím tắt tương thích với Safari

## ZaDark 23.8.1

> PC 10.0

### Fixed

* **\[Windows]** Sửa lỗi ZaDark không hoạt động trên **Zalo PC 23.7.1** trở lên (Vì Zalo nâng cấp mã nguồn)

### Removed

* Tính năng **Ẩn trạng thái (Đang soạn tin, Đã nhận, Đã xem)** không khả dụng trên **Zalo PC 23.7.1** trở lên
* **\[Windows]** Hộp thoại thông báo chỉ hỗ trợ Dark Mode (Light Mode, ẩn tin nhắn, ảnh đại diện và tên không khả dụng) trên **Zalo PC 23.7.1** trở lên

:::caution
Một vài tính năng không khả dụng vì Zalo nâng cấp mã nguồn, ZaDark sẽ cập nhật trong thời gian tới.
:::
