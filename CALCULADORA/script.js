// Esto agrega a la pantalla el valor de botón
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}


// Esto borra la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';
}

// Esto realiza los calculos
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}