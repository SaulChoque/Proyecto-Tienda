
// Supongamos que tus datos están en un array de objetos
var data = [
  {nombre: 'John Doe', profesion: 'Arquitecto & Diseñador', imagen: 'images/test/fedep.jpg'},
  {nombre: 'Jane Doe', profesion: 'Ingeniera de Software', imagen: 'images/test/fedep.jpg'},
  // Más objetos aquí...
];

// Obtén una referencia al contenedor donde quieres insertar las tarjetas
var container = document.getElementById('cardContainer');

// Itera sobre tus datos
for (var i = 0; i < data.length; i++) {
  // Crea una nueva tarjeta
  var card = document.createElement('div');
  card.className = 'card';

  // Crea y añade la imagen
  var img = document.createElement('img');
  img.src = data[i].imagen;
  img.alt = 'Avatar';
  img.style.width = '100%';
  card.appendChild(img);

  // Crea y añade el contenedor de información
  var infoContainer = document.createElement('div');
  infoContainer.className = 'cardContainer';
  card.appendChild(infoContainer);

  // Crea y añade el nombre
  var nom = document.createElement('h4');
  nom.innerHTML = '<b>' + data[i].nombre + '</b>';
  infoContainer.appendChild(nom);

  // Crea y añade la profesión
  var profession = document.createElement('p');
  profession.textContent = data[i].profesion;
  infoContainer.appendChild(profession);

  // Añade la tarjeta al contenedor
  container.appendChild(card);
}