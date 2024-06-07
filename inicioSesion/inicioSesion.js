const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+\.)([a-zA-Z]{2,})$/;
  if (!regexEmail.test(email)) {
    alert('Correo electrónico no válido');
    return;
  }

  if (username.length < 6) {
    alert('El nombre de usuario debe tener al menos 6 caracteres');
    return;
  }

  const regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_\W]).{8,}/;
  if (!regexPassword.test(password)) {
    alert('La contraseña debe tener al menos 8 caracteres, incluyendo una letra minúscula, una letra mayúscula, un número y un símbolo especial');
    return;
  }

  alert('Registro exitoso!');
  window.location.href = '../index.html'; 
});
