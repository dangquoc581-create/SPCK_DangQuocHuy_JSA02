document.addEventListener("DOMContentLoaded", () => {
    // 1. Lấy ID từ URL (ví dụ: ?id=0)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    // 2. Kiểm tra xem ID có hợp lệ và tồn tại trong mảng products (từ file home.js) không
    if (productId !== null && products[productId]) {
        const product = products[productId];

        // 3. Đổ dữ liệu vào các thẻ HTML
        document.getElementById("detail-name").innerText = product.name;
        document.getElementById("breadcrumb-name").innerText = product.name;
        document.getElementById("detail-image").src = product.image;
        document.getElementById("detail-image").alt = product.name;
        document.getElementById("detail-desc").innerText = product.description;
        
        // Sử dụng lại hàm formatPrice từ home.js
        document.getElementById("detail-price").innerText = formatPrice(product.price) + "đ";
        
        // Cập nhật tiêu đề trang web cho chuyên nghiệp
        document.title = `${product.name} - Huy-Commerce`;
    } else {
        // Nếu không tìm thấy sản phẩm, chuyển hướng về trang chủ
        window.location.href = "home.html";
    }
});