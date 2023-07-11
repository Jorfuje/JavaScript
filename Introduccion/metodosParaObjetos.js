const usuario = {
  nombre: "Jorge",
  edad: 36,
  amigos: ["Alejandro", "Cesar", "Manuel"],
  saludo: () => {
    console.log('Hola');
  },
};

/*
    Métodos propios
    Los objetos pueden tener métodos personalizados.
*/
// usuario.saludo();

/*
    Object.keys()
    Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
// const resultados = Object.keys(usuario);
// console.log(resultados);

/*
    Object.values()
    Nos devuelve un arreglo con los valores (values) del objeto.
*/
// 

/*
    Object.entries()
    Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
const resultados = Object.entries(usuario);

console.log(resultados);

console.log(`El objeto tiene ${resultados.length} propiedades!`);