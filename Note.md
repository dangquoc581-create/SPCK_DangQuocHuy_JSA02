# Huy-Commerce Note
## 1. Chức năng của từng file:
* `register.html` & `login.html`: Hai trang để tạo tài khoản rồi đăng nhập vào web.
* `home.html`: Trang chính hiển thị danh sách sản phẩm. Có thêm nút "Đăng sản phẩm" để mở Modal nhập liệu.
* `product-detail.html`: Trang chi tiết sản phẩm dùng chung (Template). Hiển thị nội dung dựa trên ID từ URL.
* `profile.html`: Trang cá nhân để xem và chỉnh sửa thông tin (Tên, Email, Mật khẩu).
* `style.css`: Quản lý giao diện theo phong cách Minimal/Clean, sử dụng biến CSS để tối ưu code.
* `main.js`: Chỗ xử lý code đăng ký, đăng nhập và cả việc cập nhật thông tin trong trang Profile.
* `home.js`: Quản lý danh sách sản phẩm (LocalStorage) và logic đăng tải sản phẩm mới.
* `product-detail.js`: Xử lý lấy ID từ URL để đổ dữ liệu động vào trang chi tiết.
## 2. Web làm được những gì?
* **Đăng ký / Đăng nhập:** Toàn bộ dữ liệu tài khoản được lưu trữ an toàn trong LocalStorage của trình duyệt.
* **Bảo vệ trang chủ:** Ai chưa đăng nhập mà đòi vào xem hàng là web tự chuyển hướng về trang đăng nhập ngay.
* **Giao diện Minimal:** Thiết kế sạch sẽ, hiện đại với hiệu ứng hover và phản hồi nút bấm mượt mà.
* **Chi tiết sản phẩm động:** Thay vì làm hàng chục file HTML, chỉ cần 1 file duy nhất để hiển thị thông tin cho mọi loại sản phẩm.
* **Đăng tải sản phẩm:** Cho phép người dùng tự đăng sản phẩm mới với đầy đủ ảnh, giá và mô tả, lưu trữ trực tiếp vào máy (LocalStorage).
* **Trang cá nhân:** Nhấp vào tên mình trên thanh menu để vào trang Profile. Ở đó có thể sửa thông tin cá nhân và bật/tắt hiển thị mật khẩu.
* **Đăng xuất an toàn:** Có hộp thoại xác nhận trước khi thoát để tránh nhấp nhầm.
* **Lưu trữ nội bộ:** Sử dụng hệ thống LocalStorage để quản lý cả dữ liệu người dùng và danh sách sản phẩm, giúp web hoạt động ổn định không cần internet.

## 3. Quy trình thực hiện (Roadmap)
1. **Base Styles:** Thiết lập `style.css` với các biến màu sắc minimal.
2. **Auth Flow:** Hoàn thiện Đăng ký -> Đăng nhập bằng `LocalStorage`.
3. **Product Content:** Xây dựng trang Chủ và logic render sản phẩm.
4. **Dynamic Detail:** Làm trang chi tiết dùng chung cho mọi sản phẩm qua ID.
5. **User Management:** Làm trang Profile để cập nhật thông tin.

## 4. Sơ đồ Luồng hoạt động (File Flow)

### Luồng Xác thực (Authentication)
* **Đăng ký:** `register.html` ➔ `main.js` (Lưu `users`) ➔ `login.html`
* **Đăng nhập:** `login.html` ➔ `main.js` (Kiểm tra `users` & lưu `user`) ➔ `home.html`
* **Đăng xuất:** `home.html` ➔ `main.js` (Xóa `user`) ➔ `login.html`

### Luồng Sản phẩm (Products)
* **Trang chủ:** `home.html` ➔ `home.js` (Render từ `my_products`)
* **Đăng hàng:** `home.html` (Modal) ➔ `home.js` (Cập nhật `my_products`) ➔ Giao diện cập nhật
* **Xem chi tiết:** `home.html` ➔ `product-detail.html?id=X` ➔ `product-detail.js` (Lấy dữ liệu món X)

### Luồng Tài khoản (Account)
* **Cập nhật:** `profile.html` ➔ `main.js` (Sync dữ liệu giữa `user` và `users`) ➔ `home.html`

---
*Người làm: Đặng Quốc Huy*
