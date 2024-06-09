
// Textfields
var usernamemail = document.getElementById('usernamemail');
var password = document.getElementById('password');


usernamemail.addEventListener('change', async () => {
  var errMessage='';
  const textField = usernamemail.value;
  var isValid = textField.reportValidity();

  if (textField.includes('@')) {
    console.log("El campo de texto contiene un @");
    password.setAttribute('type', 'email');
  }else if(/^[a-zA-Z0-9]+$/.test(textField)) {
    password.setAttribute('type', 'text');
    console.log("El campo de texto contiene solo números y letras");
  }
  if(!isValid){
    console.log('El campo usermail no es válido');
    return false;
  }
  return true;
});
password.addEventListener('change', async () => {
  const textField = password.value;
  var isValid = textField.reportValidity();
  if(!isValid){
    console.log('El campo contraseña no es válido');
    return false;
  }
});	




/* 
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
      */

//Dialogs
var dialogLogin = document.getElementById('dialog-login');
//Buttons
var toggleButton = document.getElementById('password-toggle');


//Events





toggleButton.addEventListener('click', async() => {
  if (password.type === 'password') {
    password.setAttribute('type', 'text');
    } else {
    password.setAttribute('type', 'password');

  }
});

dialogLogin.addEventListener('cancel', async () => {
  console.log('closed');
  window.location.href = "index.html";  
});