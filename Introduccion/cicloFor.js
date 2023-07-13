const nombres = [
  "Calos",
  "Christian",
  "Juan",
  "Pancho",
  "Estefania",
  "Erika",
  "Manuel",
  'Diego'
];
/* nombres.forEach((nombre) => {
  console.log(nombre);
}); */

/*
    Ciclo For
    Repite un bloque de código mientras se cumpla una condición.

    Exprsión 1 - Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
    Expresión 2 - Una condición, mientras se cumple se ejecuta un bloque de código.
    Expresión 3 - Esta expresión se ejecuta siempre y depués de que se ejecute el bloque de código.
*/
/* for (let numero = 0; numero < 11; numero += 5) {
  // Código
  console.log(numero);
} */

/* for (let numero = 50; numero > 0; numero = numero - 5) {
  // Código
  console.log(numero);
} */

for (let x = 0; x < nombres.length; x++) {
  console.log(nombres[x]);
}
