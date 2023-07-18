/*
    getElementtById
    Nos permite obtener un elemento en base a su atributo id.
*/
// const contenedor1 = document.getElementById("contenedor1");
// console.log(contenedor1);

/*
    children
    Nos permite obtener elementos hijo.
*/
// console.log(contenedor1.children);

/*
    parentElement
    Nos permite obtener el elemento padre de un elemento.
*/
// console.log(contenedor1.parentElement);

/*
    getElementsByTagName
    Nos permite obtener una colección de elementos en base a la etiqueta.
    Nota: Devuleve una colección HTML. Una colección no es arreglo.
*/
// const divs = document.getElementsByTagName('div');
// console.log(divs);
// console.log(`Tenemos ${divs.length} divs en la página.`);

/*
    getElementsByClassName
    Nos permite obtener una colección de elementos en base a su clase CSS.
    Nota: Devuleve una colección HTML.
*/
// const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores);

/*  querySelector
    Nos devuelve el primer elemento que coincida con un selector estilo CSS.
    Nota: Devuelve un nodeList.
*/
// const caja = document.querySelector('#contenedor1 .caja');
// console.log(caja);

/*
    querySelectorAll
    Nos permite obtener una colección de lementos en base a un selector estilo CSS.
    Nota: Devuelve un nodeList.
*/
/* const cajas = document.querySelectorAll("#contenedor1 .caja");
console.log(cajas);

cajas.forEach((caja) => {
  console.log(caja);
});
 */

/*
    closest
    Nos permite buscar de adentro hacia afuera en busca de un elemento.
*/
// const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child");
// console.log(ultimaCaja);
// console.log(ultimaCaja.closest('.contenedor-principal'));

/*
    Podemos encadenar todos los metodos para obtener elementos.
*/
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelectorAll('.caja'));