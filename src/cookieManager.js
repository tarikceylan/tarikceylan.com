let loginForm = document.getElementById("login-form");

loginForm.addEventListener('submit', () => {
    let username = document.getElementById("mail");
    let pw = document.getElementById("pw");

    document.cookie = `username=${username.value}`;
    document.cookie = `password=${pw.value}`;

    console.log(document.getElementById('cookies'));
});

