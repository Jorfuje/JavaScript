/*
    Modificar estilos CSS mediante "inline styles".
*/
const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child");
ultimaCaja.style.background = 'black';
ultimaCaja.style.color = 'white';

const cajas = document.querySelectorAll('.caja');
let tamaño = 24;

const incrementarFuente = () => {
    cajas.forEach((caja) => {
        caja.style.fontSize = `${tamaño + 1}px`;
        tamaño++;
    })
};
const disminuirFuente = () => {
    cajas.forEach((caja) => {
        caja.style.fontSize = `${tamaño - 1}px`;
        tamaño--;
    })
};