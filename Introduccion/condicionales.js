/*
    Operadores de Comparación:
        == Igual que
        === Igual en valor y tipo de valor
        != Diferente
        !== Diferente en valor y tipo de valor
        > Mayor que
        < Menor que
        >= Mayor o igual que
        <= Menor o igual que
        ? Operador ternario

    Operadores Lógicos
        && And
        || Or
        ! Not
*/

// Estructura de una condicional
// Ejemplo #1
/* const usuario = {
    edad: 17,
    pais: 'México',
    ticket: true
};

if(usuario.edad > 17){
    console.log('El usuario es mayor de edad, puede entrar al concierto.');
} else {
    console.log('El usuario es menor de edad, no puede entrar al concierto.');
} */

// Ejemplo #2 - Combinando operadores
/* const usuario = {
    edad: 27,
    pais: 'México',
    ticket: false
};

if(usuario.edad > 17 && usuario.ticket){
    console.log('El usuario es mayor de edad y tiene ticket, puede entrar al concierto.');
} else {
    console.log('El usuario es menor de edad o no tiene un ticket!');
} */

// Ejemplo #3 - Anidando condicionales
/* const usuario = {
    edad: 17,
    pais: 'México',
    ticket: true
};

if(usuario.edad >= 18){
    if(usuario.ticket){
        console.log('El usuario es mayor de edad y tiene ticket, puede entrar al concierto.');
    } else {
        console.log('El usuario es mayor de edad, pero no tiene un ticket, no puede entrar al concierto.');
    }
} else{
    console.log('El usuario es menor de edad!');
} */

// Ejemplo #4 - elseif
const usuario = {
    edad: 17,
    pais: 'Paraguay',
    ticket: true
};

if(usuario.pais === 'México'){
    console.log('El usuario es mexicano!');
} else if(usuario.pais === 'Colombia'){
    console.log('El usuario es colombiano!');
} else if(usuario.pais === 'España'){
    console.log('El usuario es español!');
} else{
    console.log('El ususario es de algún otro país!');
}
