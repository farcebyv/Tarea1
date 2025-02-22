document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'cenfo' && password === '123') {
        window.location.href = 'landing.html';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Usuario o clave incorrectos.';
    }
});
