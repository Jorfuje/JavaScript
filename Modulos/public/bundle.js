'use strict';

// Forma 1 - Palabra export
/* export const nombre = "Jorge";

export const obtenerPost = () => {
  return ["post1", "post2", "post3"];
}; */

// Forma 2 - Final del documento
const nombre = "Jorge";

const obtenerPost = () => {
  return ["post1", "post2", "post3"];
};

//  Forma 1 - Mediante palabras export default
/*  export default () => {
  return {
    nombre: "Jorge",
    correo: "correo@correo.com",
  };
}; */

// Forma 2 - Final de documento
const obtenerUsuario = () => {
  return {
    nombre: "Jorge",
    correo: "correo@correo.com",
  };
};

console.log("Soy código que se ejecuta desde el archivo emptyExports.js");
const correo = "correo@correo.com";

/*
    Named Imports
*/
console.log("Mi nombre es " + nombre);
console.log(obtenerPost());
console.log(nombre);
console.log(obtenerPost());
console.log(obtenerUsuario());
console.log(correo);
