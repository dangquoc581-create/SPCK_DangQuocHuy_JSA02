// Xử lý Đăng ký
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        // Lưu thông tin người dùng vào localStorage
        const user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
        
        alert("Đăng ký thành công! Đang chuyển hướng đến trang Đăng nhập...");
        window.location.href = "login.html";
    });
}

// Xử lý Đăng nhập
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === usernameInput && storedUser.password === passwordInput) {
            alert("Đăng nhập thành công!");
            window.location.href = "home.html";
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    });
}