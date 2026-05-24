# Huy-Commerce Note
## 1. Chức năng của từng file:
* `register.html` & `login.html`: Hai trang để tạo tài khoản rồi đăng nhập vào web.
* `home.html`: Trang chính hiển thị danh sách sản phẩm.
* `profile.html`: Trang cá nhân để xem và chỉnh sửa thông tin (Tên, Email, Mật khẩu).
* `style.css`: Quản lý giao diện theo phong cách Minimal/Clean, sử dụng biến CSS để tối ưu code.
* `main.js`: Chỗ xử lý code đăng ký, đăng nhập và cả việc cập nhật thông tin trong trang Profile.
* `home.js`: Quản lý danh sách sản phẩm và hiển thị lên giao diện.
## 2. Web làm được những gì?
* **Đăng ký / Đăng nhập:** Toàn bộ dữ liệu tài khoản được lưu trữ an toàn trong LocalStorage của trình duyệt.
* **Bảo vệ trang chủ:** Ai chưa đăng nhập mà đòi vào xem hàng là web tự chuyển hướng về trang đăng nhập ngay.
* **Giao diện Minimal:** Thiết kế sạch sẽ, hiện đại với hiệu ứng hover và phản hồi nút bấm mượt mà.
* **Trang cá nhân:** Nhấp vào tên mình trên thanh menu để vào trang Profile. Ở đó có thể sửa thông tin cá nhân và bật/tắt hiển thị mật khẩu.
* **Đăng xuất:** Quay lại trang đăng nhập.
* **Lưu trữ nội bộ:** Sử dụng hệ thống LocalStorage để quản lý cả dữ liệu người dùng và danh sách sản phẩm, giúp web hoạt động ổn định không cần internet.

## 3. Quy trình thực hiện (Roadmap)
1. **Base Styles:** Thiết lập `style.css` với các biến màu sắc minimal.
2. **Auth Flow:** Hoàn thiện Đăng ký -> Đăng nhập bằng `LocalStorage`.
3. **Product Content:** Xây dựng trang Chủ và logic render sản phẩm.
4. **User Management:** Làm trang Profile để cập nhật thông tin.

---
*Người làm: Đặng Quốc Huy*
