let generatedOTP = null;
let users = [];

function sendOTP() {
    let email = document.getElementById("email").value;
    generatedOTP = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
    localStorage.setItem("otp", generatedOTP);

    alert(`OTP sent to ${email}: ${generatedOTP}`);
}

function verifyOTP() {
    let enteredOTP = document.getElementById("otp").value;
    if (enteredOTP == localStorage.getItem("otp")) {
        let user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            mobile: document.getElementById("mobile").value
        };

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");
        window.location.href = "index.html";
    } else {
        alert("Invalid OTP");
    }
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password");
    }
}
