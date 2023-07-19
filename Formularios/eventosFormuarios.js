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
formulario.pais.addEventListener("change", (e) => {
  console.log("El pais cambio");
  console.log("El nuevo valor es: " + e.target.value);
});

formulario["cantidad-5"].addEventListener("change", () => {
  console.log("La cantidad cambio a 5.");
});

formulario["cantidad-10"].addEventListener("change", () => {
  console.log("La cantidad cambio a 10");
});

/*
  Evento focus
  Nos permite detectar cuando un input recibe el foco de atención.
*/
formulario.correo.addEventListener("focus", () => {
  console.log("El input correo ahora es el foco de atención.");
});

/*
  Eventu Blur
  Nos permite detectar cuando un input pierde el foco de atención.
*/

formulario.correo.addEventListener("blur", () => {
  console.log("El input correo ya no es el foco de atención.");
});

/*
  Evento Keydown 
  Nos permite detectar cuando una tecla es presionada sobre un input.
*/

formulario.correo.addEventListener("keydown", (e) => {
  console.log(e);
});

/*
  Evento Keyup
  se ejecuta cuandouna tecla es levantada al escribir sobre un input.
*/

formulario.correo.addEventListener("keyup", (e) => {
  console.log(e);
});