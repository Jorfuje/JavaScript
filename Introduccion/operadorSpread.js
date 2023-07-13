/*
    Operador Spread
    Permite tomar elementos de un arreglo u objeto y expandirlos a otro sitio.
*/
/* const frutas = ['Manzana', 'Pera', 'Piña', 'Melón'];
const comidaFavorita = ['Pizza', 'Sushi', ...frutas];
console.log(comidaFavorita);

const datosLogin = {
    correo: 'correo@correo.com',
    password: '123'
};

const usuario = {
    nombre: 'Carlos',
    edad: 27,
    ...datosLogin,
};
console.log(usuario); */

/*
    Parametros Rest
    Permite que un función contenga un número indefinido de argumentos.
    Los argumentos extra que encuentre los convertira en un arreglo.
*/
/* const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
}
registrarUsuario('Jorge', 'ejemplo@correo.com');
registrarUsuario('Luis', 'alex@correo.com', 23, 'España'); */

/*
    Destructuración de objetos.
    Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/
const amigos = ['Alejandro', 'Cesar', 'Luis'];
// const primerAmigo = amigos[0];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(tercerAmigo);

const persona = {
    nombre: 'Jorge',
    edad: 36,
    pais: 'México',
};

const {nombre, pais, edad} = persona;

console.log(nombre, pais);

const mostrarEdad = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años!`);
};
mostrarEdad(persona);