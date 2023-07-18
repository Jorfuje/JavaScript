/*
    window.setTimeOut()
    Nos permite ejecutar una función después de cierto tiempo.
*/
/* const saludo = () => {
  console.log("Hola");
};

let id;
const iniciar = () => {
  console.log("Iniciando timer!");
  id = setTimeout(saludo, 5000);
};

const parar = () => {
  console.log("Parando timer!");
  clearTimeout(id);
}; */

/*
    window.setInterval()
    Nos permite ejecutar una función cada cierto tiempo.
*/
let cuenta = 0;
let id;
const iniciar = () => {
  id = setInterval(() => {
    console.log(cuenta);
    cuenta++;
  }, 1000);
};

const parar = () => {
  console.log("Parando la cuenta!");
  clearInterval(id);
};
