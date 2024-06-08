
// Textfields
var email = document.getElementById('email');
var username = document.getElementById('username');
var password = document.getElementById('password');


email.addEventListener('change', reportValidityEmail);
username.addEventListener('change', reportValidityUsername);
password.addEventListener('change', reportValidityPassword);	

function reportValidityEmail(event) {
  //console.log('reportValidity555');
  const textField = event.target;
  if (textField.reportValidity) {
    const isValid = textField.reportValidity();
    
    if (!isValid) {
      console.log('El campo no es válido');
      // Manejar el caso cuando el campo no es válido
      }
      }
      }
function reportValidityUsername(event) {
  //console.log('reportValidity555');
  var errMessage='';
  const textField = event.target;
  if (textField.reportValidity) {
    console.log(textField.value);
    var isValid = textField.reportValidity();
    if(textField.value.length < 6){
      isValid = false;
      errMessage='El nombre de usuario debe tener al menos 6 caracteres';
      }
    if (!isValid) {
      username.setAttribute('error', true);
      username.setAttribute('error-text', errMessage);
      console.log('Error: '+errMessage);
      // Manejar el caso cuando el campo no es válido
      } else {
        username.removeAttribute('error-text');
      username.removeAttribute('error');
      }
      }
}
function reportValidityPassword(event) {
  var errMessage='';
  const regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_\W]).{8,}/;
  //console.log('reportValidity555');
  const textField = event.target;
  if (textField.reportValidity) {
    var isValid = textField.reportValidity();
    if (!regexPassword.test(textField.value)) {
      isValid = false;
      errMessage='La contraseña debe tener al menos 8 caracteres, incluyendo una letra minúscula, una letra mayúscula, un número y un símbolo especial';
      }
      if (!isValid) {
        password.setAttribute('error', true);
        password.setAttribute('error-text', errMessage);
        console.log('Error: '+errMessage);
        // Manejar el caso cuando el campo no es válido
        } else {
          password.removeAttribute('error-text');
      password.removeAttribute('error');
      }
}

}
//Dialogs
var dialogConfirm = document.getElementById('dialog-confirm');
//Buttons
var toggleButton = document.getElementById('password-toggle');
var submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async () => {
  await dialogConfirm.show();
});


toggleButton.addEventListener('click', async() => {
  if (password.type === 'password') {
    password.setAttribute('type', 'text');
    } else {
    password.setAttribute('type', 'password');

  }
});

