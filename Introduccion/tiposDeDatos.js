/* Tipos de datos que podemos guardar en las variables:
    string - Cadena de Texto
    number - Número
    boolean - Booleano (verdader o falso)
    object - Objeto
    function - Funciones
    
    null - Valor nulo
    undefined - Valor sin definir
*/
// Cadena de Texto
const nombre = 'Jorge';
const parrafo = "Este es un 'parrafo'";
const parrafo2 = 'Este es un "parrafo"';
// const parrafo3 = 'Este es un \'parrafo\'';

// Número
const numero = 4;
const numero2 = -4.122;

// Booleano
const usuarioConectado = true;
const mayorQue = 10 > 2;
// console.log(mayorQue);

// Arrays - Arreglos
const arreglo = [1, "Sam", true, {propiedad: 'valor'}, [1, 2, 3]];
// console.log(arreglo);

// Objeto
const persona = {
    nombre: 'Juan',
    edad: 27,
    carro: {
        marca: '...',
        color: 'negro',
    }
}
// 

// Función
function hola() {
    console.log('Hola');
}

// hola();

// Null
// Normalmente lo usamos cuando queremos especificar que un valor es nulo.
const mivariable = null;

// Undefined
// Undefined se usa para indicarnos que un valor no esta definido.
const mivariable2 = undefined;