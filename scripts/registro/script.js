const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar correo electrónico
    const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+\.)([a-zA-Z]{2,})$/;
    if (!regexEmail.test(email)) {
        alert('Correo electrónico no válido');
        return;
    }

    // Validar nombre de usuario
    if (username.length < 6) {
        alert('El nombre de usuario debe tener al menos 6 caracteres');
        return;
    }

    // Validar contraseña
    const regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_\W]).{8,}/;
    if (!regexPassword.test(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluyendo una letra minúscula, una letra mayúscula, un número y un símbolo especial');
        return;
    }

    // Si los datos son válidos, enviar la solicitud de registro
    // Si no, mostrar un mensaje de error

    console.log('Correo electrónico:', email);
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);

    // Simular el registro exitoso y redirigir a la página principal
    alert('Registro exitoso!');
    window.location.href = 'index.html'; // Reemplazar con la URL de la página principal
});
