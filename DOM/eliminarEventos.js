const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const primeracaja = document.querySelector(".caja");

const toggleClase = () => {
  primeracaja.classList.toggle("activa");
};

boton1.addEventListener("click", () => {
  primeracaja.addEventListener("click", toggleClase);
});

boton2.addEventListener("click", () => {
  primeracaja.removeEventListener("click", toggleClase);
});
