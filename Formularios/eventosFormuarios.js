const formulario = document.forms["formulario-donacion"];

/*
    Evento submit
    Nos permite detectar cuando el usuario intenta enviar el formulario.
*/
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Enviando datos...");
});

/*
    Evento Change
    Nos permite detectar cuando hay un cambio en el valor de un input, select o textarea.
    Se ejecuta cuando cambiamos el valor del input y damos click fuera.
*/
