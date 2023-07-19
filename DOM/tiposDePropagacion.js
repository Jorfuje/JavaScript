/*
    Bubbling (false, por defecto)
    En bubbling el evento del elemento hijo reacciona primero y después el evento del elemento padre.

    Capturing (true)
    En capturing el elemento padre reacciona primero y despúes el elemento hijo.
*/

const contenedor = document.getElementById("contenedor1");
contenedor.addEventListener("click", (e) => {
  console.log("Hiciste click en el contenedor");
});

const primeraCaja = document.querySelector(".caja");
primeraCaja.addEventListener("click", (e) => {
  console.log("Hiciste click en la caja 1.");
});
