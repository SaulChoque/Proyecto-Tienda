const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  var email = document.getElementById('email');
  var username = document.getElementById('username');
  var password = document.getElementById('password').value;

  const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+\.)([a-zA-Z]{2,})$/;
  if (!regexEmail.test(email.value)) {
    email.error = 'El email no es válido';
    var errorElement = document.createElement('div');
    errorElement.textContent = email.error;
    email.parentNode.appendChild(errorElement);
    return;
  }

  if (username.value.length < 6) {
    username.error='El nombre de usuario debe tener al menos 6 caracteres';
    var errorElementUsername = document.createElement('div');
    errorElementUsername.textContent = username.error;
    username.parentNode.appendChild(errorElementUsername);
    return;
  }


const regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_\W]).{8,}/;
if (!regexPassword.test(password)) {
    password.error = 'La contraseña debe tener al menos 8 caracteres, incluyendo una letra minúscula, una letra mayúscula, un número y un símbolo especial';
    var errorElementPassword = document.createElement('div');
    errorElementPassword.textContent = password.error;
    password.parentNode.appendChild(errorElementPassword);
    return;
}

  alert('Registro exitoso!');
  window.location.href = '../index.html'; 
});

closeButton.addEventListener('click', async () => {
  await dialog.close();
});

