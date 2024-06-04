
// Supongamos que tus datos están en un array de objetos
var data = [
    {nombre: 'Peine', profesion: 'Marca1', imagen: 'images/test/fedep.jpg'},
    {nombre: 'Shampoo', profesion: 'Marca2', imagen: 'images/test/fedep.jpg'},
    {nombre: 'Acondicionador', profesion: 'Marca3', imagen: 'images/test/fedep.jpg'},
    {nombre: 'Crema', profesion: 'Marca4', imagen: 'images/test/fedep.jpg'},
    {nombre: 'Gel', profesion: 'Marca5', imagen: 'images/test/fedep.jpg'},
    {nombre: 'Cera', profesion: 'Marca6', imagen: 'images/test/fedep.jpg'},
    {nombre: 'Tinte', profesion: 'Marca7', imagen: 'images/test/fedep.jpg'},
    {nombre: 'Secador', profesion: 'Marca8', imagen: 'images/test/fedep.jpg'},
    {nombre: 'Plancha', profesion: 'Marca9', imagen: 'images/test/fedep.jpg'},
    

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
  img.className = 'card-img-top';
  img.src = data[i].imagen;
  img.alt = 'Avatar';
  img.style.width = '100%';
  card.appendChild(img);

  // Crea y añade el contenedor de información
  var infoContainer = document.createElement('div');
  infoContainer.className = 'card-body';
  card.appendChild(infoContainer);

  // Crea y añade el nombre
  var nom = document.createElement('h5');
  nom.innerHTML = '<b>' + data[i].nombre + '</b>';
  infoContainer.appendChild(nom);

  // Crea y añade la profesión
  var profession = document.createElement('p');
  profession.className = 'card-text';
  profession.textContent = data[i].profesion;
  infoContainer.appendChild(profession);


  var link = document.createElement('a');
  link.className = 'btn btn-primary';
  link.href = 'https://www.linkedin.com/in/federico-perez-9b6b7b1b4/';
  link.innerHTML = 'Comprar';
  infoContainer.appendChild(link);

  // Añade la tarjeta al contenedor
  container.appendChild(card);
}