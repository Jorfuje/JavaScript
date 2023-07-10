/* Local Scope o Variables Locales
    - Son las variables declaradas dentro de una función.
    - Solo podemos acceder a ellas desde dentro de la función.
*/
var numero = 1;
var ontenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} número de letras.`);

    var funciónAnidada = () => {
        console.log(numero);
    }

    funciónAnidada();
};

ontenerNumeroLetras('Luis');
// console.log(numero);