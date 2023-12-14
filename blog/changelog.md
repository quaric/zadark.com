---
title: Lịch sử thay đổi
authors: ncdai
tags:
  - release
---

## ZaDark 23.12.2
> PC 12.0

### Changed
- **[macOS]** Bỏ định dạng tập tin cài đặt ***pkg**, thay thế bằng định dạng gốc **Unix Executable File**
  - Sửa lỗi nghiêm trọng khi cài đặt `zsh: terminated...`
  - Giúp cài đặt ZaDark nhanh hơn
- **[macOS]** Bỏ thực hiện việc ký (codesign) và xác nhận (notarize) ứng dụng trên macOS với Apple, vì không thể thực hiện với tập tin **Unix Executable File**
- Cải thiện quá trình cài đặt ZaDark PC
- Cải thiện mã nguồn ZaDark PC

<!-- truncate -->

## ZaDark 23.12.1
> PC 11.8

### Added
- Hiển thị chi tiết các bước cài đặt, gỡ cài đặt ZaDark.
  - Nâng cao trải nghiệm người dùng.
  - Nhà phát triển dễ dàng biết được lỗi ở bước nào khi người dùng báo lỗi.

### Changed
- Cải thiện mã nguồn ZaDark PC.
- Cập nhật địa chỉ hướng dẫn.
  - Windows: https://zadark.com/pc/windows
  - macOS: https://zadark.com/pc/macos

## ZaDark 23.11.2
> PC 11.7 và Web 9.17

### Fixed
- Sửa lỗi Dark Mode cho trình xem ảnh/video (Media Viewer)

## ZaDark 23.11.1
> PC 11.6 và Web 9.16

### Fixed
- Sửa lỗi không ẩn được hình ảnh ([#86](https://github.com/quaric/zadark/issues/86)).
- Sửa lỗi Dark Mode trạng thái đã xem tin nhắn ([#87](https://github.com/quaric/zadark/issues/87)).

### Added
- Thêm bản cài đặt **arm64** cho macOS.
- Thêm Google AdSense vào Website ZaDark.com để tìm kiếm kinh phí phát triển sản phẩm. Chúng tôi xin lỗi nếu quảng cáo làm phiền mọi người khi truy cập Website.

### Changed
- Ẩn tiêu đề TitleBar ([#88](https://github.com/quaric/zadark/issues/88)).

## ZaDark 23.10.1
> PC 11.5 và Web 9.15

### Fixed
- Sửa lỗi không thể đặt Tên gợi nhớ/Nhãn cho cuộc trò chuyện khi bật **Ẩn Tên cuộc trò chuyện**

### Changed
- Cập nhật địa chỉ Website chính thức sang https://zadark.com
- Ẩn cài đặt giao diện của Zalo vì chỉ có 1 lựa chọn giao diện Mặc định
#### PC specific
- Thêm dòng chữ "**Vui long cho trong giay lat. Co the se mat vai phut ...**" để người dùng hiểu quá trình cài đặt có thể kéo dài vài phút.

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
