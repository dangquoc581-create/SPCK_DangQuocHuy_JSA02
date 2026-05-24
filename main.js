
// Xử lý Đăng ký
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("reg-username").value;
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        // Lấy danh sách user cũ từ localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Kiểm tra xem tên đăng nhập hoặc email đã tồn tại chưa
        if (users.some(u => u.username === username || u.email === email)) {
            alert("Tên đăng nhập hoặc Email đã được sử dụng!");
            return;
        }

        // Thêm user mới vào mảng và lưu lại
        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Đăng ký thành công! Qua trang đăng nhập nhé.");
        window.location.href = "login.html";
    });
}

// Xử lý Đăng nhập
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById("username").value;
        const emailInput = document.getElementById("login-email").value;
        const passwordInput = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.username === usernameInput && u.email === emailInput && u.password === passwordInput);

        if (user) {
            alert("Đăng nhập thành công!");
            localStorage.setItem("user", JSON.stringify(user)); // Lưu phiên đăng nhập (session)
            window.location.href = "home.html";
        } else {
            alert("Tài khoản hoặc mật khẩu không đúng!");
        }
    });
}

// Kiểm tra đăng nhập khi vào trang Home
const welcomeMsg = document.getElementById("welcome-message");
if (welcomeMsg) {
    const user = JSON.parse(localStorage.getItem("user"));
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
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "login.html";
    });
}

// --- Các hàm xử lý trang Profile ---

// Đổ dữ liệu từ localStorage vào các ô input trên trang profile
function loadUserProfile() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        if (document.getElementById("profile-username")) document.getElementById("profile-username").value = user.username;
        if (document.getElementById("profile-email")) document.getElementById("profile-email").value = user.email;
        if (document.getElementById("profile-password")) document.getElementById("profile-password").value = user.password;
    }
}

// Xử lý nút hiện/ẩn mật khẩu
function setupPasswordToggle() {
    const toggleBtn = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("profile-password");
    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener("click", () => {
            const isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            toggleBtn.innerText = isPassword ? "Ẩn" : "Hiện";
        });
    }
}

// Xử lý khi nhấn nút Lưu thay đổi
const saveProfileBtn = document.getElementById("save-profile-btn");
if (saveProfileBtn) {
    saveProfileBtn.addEventListener("click", () => {
        const currentUser = JSON.parse(localStorage.getItem("user"));
        if (!currentUser) return;

        const newUsername = document.getElementById("profile-username").value;
        const newEmail = document.getElementById("profile-email").value;
        const newPassword = document.getElementById("profile-password").value;

        // Cập nhật trong danh sách tổng (users)
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        
        if (userIndex !== -1) {
            users[userIndex] = { username: newUsername, email: newEmail, password: newPassword };
            localStorage.setItem("users", JSON.stringify(users));
        }

        // Cập nhật phiên đăng nhập hiện tại
        localStorage.setItem("user", JSON.stringify({ username: newUsername, email: newEmail, password: newPassword }));

        alert("Cập nhật thông tin thành công vào Local Storage!");
        window.location.href = "home.html"; // Quay lại trang chủ để thấy tên mới
    });
}