// Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const validUsername = 'admin';
    const validPassword = '123456';
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const captcha = document.getElementById('captcha').checked;
    const errorMessage = document.getElementById('errorMessage');

    if (!captcha) {
        errorMessage.textContent = 'Por favor, confirme que não é um robô';
        errorMessage.style.display = 'block';
        return;
    }

    if (username === validUsername && password === validPassword) {
        errorMessage.style.display = 'none';
        alert('Login realizado com sucesso no Conecta Festa!');
        // window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos';
        errorMessage.style.display = 'block';
    }
});

// Mostrar/Esconder Senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = '🙈';
    } else {
        passwordField.type = 'password';
        this.textContent = '👁️';
    }
});

// Cadastro
const registerModal = document.getElementById('registerModal');
const registerLink = document.getElementById('registerLink');
const closeRegister = document.getElementById('closeRegister');

registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    registerModal.style.display = 'flex';
});

closeRegister.addEventListener('click', function() {
    registerModal.style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerError = document.getElementById('registerError');

    if (password !== confirmPassword) {
        registerError.style.display = 'block';
        return;
    }

    alert(`Conta criada com sucesso!\nUsuário: ${username}\nE-mail: ${email}`);
    registerModal.style.display = 'none';
    registerError.style.display = 'none';
});

// Recuperação de Senha
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const closeForgot = document.getElementById('closeForgot');

forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    forgotPasswordModal.style.display = 'flex';
});

closeForgot.addEventListener('click', function() {
    forgotPasswordModal.style.display = 'none';
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('recoverEmail').value;
    const recoverMessage = document.getElementById('recoverMessage');

    recoverMessage.style.display = 'block';
    setTimeout(() => {
        recoverMessage.style.display = 'none';
        forgotPasswordModal.style.display = 'none';
    }, 2000);
});

// Fechar modais ao clicar fora
window.addEventListener('click', function(e) {
    if (e.target === registerModal) registerModal.style.display = 'none';
    if (e.target === forgotPasswordModal) forgotPasswordModal.style.display = 'none';
});