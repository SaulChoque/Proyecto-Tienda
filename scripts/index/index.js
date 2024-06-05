
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
    // Crea una nueva c olumna
    var col = document.createElement('div');
    col.className = 'col-sm-3 my-3';

    // Crea elemento Card
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
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);

    // Crea y añade el nombre
    var tituloProd = document.createElement('h5');
    tituloProd.innerHTML = '<b>' + data[i].nombre + '</b>';
    cardBody.appendChild(tituloProd);

    // Crea y añade la profesión
    var precio = document.createElement('p');
    precio.className = 'card-text';
    precio.textContent = data[i].profesion;
    cardBody.appendChild(precio);

/*
// Filled Button Material Web (Boton)
var link = document.createElement('md-filled-button');
link.href = 'https://www.linkedin.com/in/federico-perez-9b6b7b1b4/';
link.target = '_blank';	
link.innerHTML = 'Comprar';
cardBody.appendChild(link);
*/


    col.appendChild(card);

col.addEventListener('mouseover', function() {
    console.log('Mouse over');
    // Obtiene el elemento card específico dentro de este col
    var thisCard = this.querySelector('.card');
    // Crea el botón solo si no existe ya
    if (!thisCard.querySelector('md-filled-button')) {
        // Filled Button Material Web (Boton)
        var link = document.createElement('md-filled-button');
        link.href = 'https://www.linkedin.com/in/federico-perez-9b6b7b1b4/';
        link.target = '_blank';	
        link.innerHTML = 'Comprar';
        thisCard.querySelector('.card-body').appendChild(link);
    }
});

col.addEventListener('mouseleave', function() {
    console.log('Mouse leave');
    // Obtiene el elemento card específico dentro de este col
    var thisCard = this.querySelector('.card');
    // Si existe el botón, lo elimina
    var button = thisCard.querySelector('md-filled-button');
    if (button) {
        thisCard.querySelector('.card-body').removeChild(button);
    }
});
    // Añade la tarjeta al contenedor
    container.appendChild(col);
}