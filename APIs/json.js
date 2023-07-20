/*
    JSON
    Javascript Object Notation
*/

/*
    Tipos de datos que podemos usar en JSON:
    - Cadenas de texto.
    - Números.
    - Objetos (en formato JSON).
    - Arreglos.
    - Booleanos.
    - Null.

    Tipos de datos que no podemos usar en JSON:
    - Funciones.
    - Objetos de fecha.
    - Undefines.
*/
// datos.json
const datos = `{
    "id": 1,
    "nombre": "Luis Angel",
    "suscriptor_activo": true,
    "post": [
        {
            "id": 1,
            "titulo": "Titulo del primer post",
            "texto": "Texto del primer post ..."
        },
        {
            "id": 2,
            "titulo": "Titulo del segundo post",
            "texto": "Texto del segundo post ..."
        }
    ]
}`;

/*
    parse()
    Le pasamos una cadena de texto con formato JSON y nos devuelve objeto de javascript.
*/

const objeto = JSON.parse(datos);
// console.log(objeto.nombre);

/*
    stringify()
    Nos permite pasarle un objeto de javascript y nos devuelve una cadena de texto con objeto en formato JSON.
*/
const usuario = {
    nombre: "Jorge",
    correo: "cor@cor.com",
    coloresfavoritos: ['azul', 'rojo', 'negro']
}

console.log(JSON.stringify(usuario));