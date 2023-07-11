/* 
    .length - Devuelve el números de caracteres de una cadena de texto.
*/
// const texto = 'Hola yo soy Jorge';
// console.log(texto.length);

/*
    .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
*/
/* const texto = 'Hola yo soy Jorge';
console.log(texto.indexOf('o'));
console.log(texto.lastIndexOf('o')); */

/*
    .slice() - Devuelve un fragmento de una cadena de texto.
    1er parametro - index desde donde queremos cortar
    2do parametro (opcional) - index hasta donde queremos cortar
*/
// const texto = 'Hola yo soy Jorge!';
// const index = texto.indexOf('J');
// const lastIndex = texto.lastIndexOf('e')
// console.log(texto.slice(index, lastIndex + 1));
// console.log(texto.slice(-6, -1));
// console.log(texto);

/*
    .replace() -Devuelve una cadena de texto en donde remplaza un valor por otro.
    1er parametro - el texto que queemos remplazar.
    2do parametro - el texto que queremos poner.
*/
// const texto = 'Hola yo soy Jorge!';
// console.log(texto.replace('Jorge', 'Albero'));

/*
    .split() - Convierte una de cadena de texto en un arreglo.
    Tenemos que especificar donde cortar cada elemento.

    1er parametro - el caracter que funcionara coo separador.
*/
// const texto = "Hola yo soy Jorge!";
// console.log(texto.split(" "));

/*
    .toUpperCase() .toLowerCase
    Devuelve una cadena de texto en puras minusculas/mayusculas.
*/
const texto = "Hola yo soy Jorge!";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());