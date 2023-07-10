/*
    .indexOf()
    Obtenemos el primer index de un elemento.
    Si no hay elemento nos retorna -1.
*/
const nombres = [
  "Carlos",
  "Rafael",
  "Estefania",
  "Rodrigo",
  "Rafael",
  "Gema",
  "Diana",
  "Sara",
];
// console.log(nombres.indexOf("Pancho"));

/*
    .lastIndexOf()
    Obtenemos el último index de un elemento.
*/
// console.log(nombres.lastIndexOf("Rafael"));

/*
    .forEach()
    Nos permite ejecutar una función por cada elemento.
*/
/* nombres.forEach((nombre, index) => {
  console.log(`Hola ${nombre} (${index})`);
}); */

/*
    .find()
    Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
/* const resultado = nombres.find((nombre) => {
    if(nombre[0] === 'X'){
        return nombre;
    }
});
console.log(resultado); */

/*
    .map()
    Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
    en base a los resultados de la función.
    (Trabaja cn todos los elementos del arreglo)
*/
// const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
// console.log(nombresMayusculas);

/*
    .filter()
    Nos permite ejecutar una función por cada elemento
    y luego crear un arreglo en base a los resultados de esa función.
    (Trabaja con los elementos que cumplan con las condiciones)
*/
/* const nombresCuatroLetras = nombres.filter((nombre) => {
  if (nombre.length === 4) {
    return nombre;
  }
});
console.log(nombresCuatroLetras); */

/*
    .includes()
    Nos permite saber si el arreglo contine un elemento especifico.
*/
// console.log(nombres.includes('Julio'));
// console.log(nombres.includes('Carlos'));

/*
    .every()
    Nos permite ejecutar una condicional sobre cada elemento y
    nos devuelve true si TODOS los elementos cumplieron la condicion.
*/
/* const nombresValidos = nombres.every((nombre) => {
  if (typeof nombre === "string") {
    return true;
  } else {
    return false;
  }
});
console.log('Todos loe elementos son validos? ' + nombresValidos); */

/*
    .some()
    Nos permite ejecutar una condicional sobre cada elemento y 
    nos devuelve true si algun elemento cumplio la condición.
*/
const nombresValidos = nombres.some((nombre) => {
    if (typeof nombre !== "string") {
      return true;
    } else {
      return false;
    }
  });
  console.log('¿El arreglo es invalido? ' + nombresValidos); 
// true si hay algún valor invalido
// false si no hay algún valor invalido
