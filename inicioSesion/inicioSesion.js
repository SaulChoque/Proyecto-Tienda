const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Correo electrónico:', email);
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);

    alert('Registro exitoso!');
    window.location.href = 'index.html'; // Reemplazar con la URL de la página principal
});
