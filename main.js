
const USER_API = 'https://6a0927eae7e3f433d482f23b.mockapi.io/api/HuyCommerce/users';

// Xử lý Đăng ký
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        try {
            // Gửi dữ liệu lên API bằng phương thức POST
            const response = await fetch(USER_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });

            if (response.ok) {
                alert("Đăng ký thành công lên hệ thống! Qua trang đăng nhập nhé.");
                window.location.href = "login.html";
            } else {
                alert("Lỗi khi lưu dữ liệu lên server!");
            }
        } catch (error) {
            console.error("Lỗi kết nối API:", error);
        }
    });
}

// Xử lý Đăng nhập
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('username').value;
        const emailInput = document.getElementById('login-email').value;
        const passwordInput = document.getElementById('password').value;

        try {
            // Tìm kiếm user trên API 
            const url = `${USER_API}?username=${encodeURIComponent(usernameInput)}&email=${encodeURIComponent(emailInput)}`;
            const response = await fetch(url);
            const users = await response.json();

            // Kiểm tra xem có user nào khớp không và mật khẩu có đúng không
            const user = users.find(u => u.password === passwordInput);

            if (user) {
                alert("Đăng nhập thành công!");
                localStorage.setItem('user', JSON.stringify(user)); // Lưu phiên đăng nhập
                window.location.href = "home.html";
            } else {
                alert("Tài khoản hoặc mật khẩu không đúng!");
            }
        } catch (error) {
            console.error("Lỗi khi đăng nhập:", error);
            alert("Không thể kết nối với máy chủ!");
        }
    });
}

// Kiểm tra đăng nhập khi vào trang Home
const welcomeMsg = document.getElementById('welcome-message');
if (welcomeMsg) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = "login.html";
    } else {
        welcomeMsg.innerText = `Xin chào, ${user.username}`;
        // Thêm con trỏ tay và sự kiện nhấp để vào trang profile
        welcomeMsg.style.cursor = "pointer";
        welcomeMsg.title = "Xem và chỉnh sửa hồ sơ";
        welcomeMsg.onclick = () => window.location.href = "profile.html";
    }
}

// Xử lý nút Đăng xuất
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = "login.html";
    });
}

// --- Các hàm xử lý trang Profile ---

// Đổ dữ liệu từ localStorage vào các ô input trên trang profile
function loadUserProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        if (document.getElementById('profile-username')) document.getElementById('profile-username').value = user.username;
        if (document.getElementById('profile-email')) document.getElementById('profile-email').value = user.email;
        if (document.getElementById('profile-password')) document.getElementById('profile-password').value = user.password;
    }
}

// Xử lý nút hiện/ẩn mật khẩu
function setupPasswordToggle() {
    const toggleBtn = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('profile-password');
    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            toggleBtn.innerText = isPassword ? 'Ẩn' : 'Hiện';
        });
    }
}

// Xử lý khi nhấn nút Lưu thay đổi
const saveProfileBtn = document.getElementById('save-profile-btn');
if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        user.username = document.getElementById('profile-username').value;
        user.email = document.getElementById('profile-email').value;
        user.password = document.getElementById('profile-password').value;
        
        localStorage.setItem('user', JSON.stringify(user));
        alert("Cập nhật thông tin thành công vào Local Storage!");
        window.location.href = "home.html"; // Quay lại trang chủ để thấy tên mới
    });
}