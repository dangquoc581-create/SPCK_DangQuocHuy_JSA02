// Danh sách sản phẩm làm thủ công (Hardcoded)
const products = [
    { name: "iPhone 15 Pro Max", price: "32990000", image: "https://mac24h.vn/images/detailed/95/76345_natural_titanium_update__2_.jpg", description: "Chip A17 Pro, khung viền Titan siêu bền." },
    { name: "MacBook Pro M3", price: "39990000", image: "https://bizweb.dktcdn.net/100/444/581/products/1-0ea3f92a-09c2-4d40-a838-e7f8c0a9bec4-203be3ba-1191-4f13-9d7c-536e80beb909.png?v=1717471153403", description: "Màn hình Liquid Retina XDR, hiệu năng cực đỉnh." },
    { name: "Apple Watch Series 9", price: "10490000", image: "https://apple.ngocnguyen.vn/cdn/images/202311/goods_img/moi-100-apple-watch-series-9-thep-gps-cellular-P15476-1698997130755.png", description: "Tính năng chạm đúp mới, màn hình sáng hơn." },
    { name: "iPad Pro M2", price: "20190000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlP2kwIElDzAFIctvcQ8RCfW016cGDBJhScQ&s", description: "Sức mạnh từ chip M2, hỗ trợ Apple Pencil Hover." },
    { name: "Samsung S24 Ultra", price: "29990000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTru49Q7wOcqqQJQDNW9S_CszjOPBRIiKLKJQ&s", description: "Camera 200MP, tích hợp AI thông minh." },
    { name: "Sony WH-1000XM5", price: "6990000", image: "https://pos.nvncdn.com/91002e-15402/ps/20220601_UZxFH0gKhi8BtRLbp3A6TPGw.jpeg?v=1673600583", description: "Chống ồn đỉnh cao, âm thanh trung thực." }
];

// Hàm hiển thị sản phẩm ra màn hình
function renderProducts(products) {
    const productList = document.getElementById("product-list");
    if (!productList) return;
    
    // Dùng map để tạo danh sách card sản phẩm
    productList.innerHTML = products.map((product, index) => `
        <div class="col">
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted small mb-3">${product.description}</p>
                    <p class="card-text text-primary fw-bold mt-auto">${formatPrice(product.price)}đ</p>
                    <button class="btn btn-primary mt-auto">Mua ngay</button>
                </div>
            </div>
        </div>
    `).join("");
}

// Hàm phụ trợ để định dạng giá tiền 
function formatPrice(price) {
    return Number(price).toLocaleString("vi-VN");
}

// Chạy hàm lấy dữ liệu khi trang web tải xong
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
});