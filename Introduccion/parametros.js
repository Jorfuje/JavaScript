/* 
    - Parametros: los valores especificados en la definición.
    - Argumentos: los valores que le pasamos a la función cuando al invocamos. 
*/
/* const saludo = (nombre = 'amigo') => {
  console.log(`Hola ${nombre}`);
};

saludo(); */

/* 
    Multiples parametros
*/
const operacion = (tipo, num1, num2) => {
  // console.log(num1 + num2);
  if (tipo === "suma") {
    console.log(num1 + num2);
  } else if (tipo === "resta") {
    console.log(num1 - num2);
  }
};

operacion("suma", 8, 3);
operacion("resta", 8, 11);
