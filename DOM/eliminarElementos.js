const eliminarCaja = () => {
  const padre = document.getElementById("contenedor1");
  const cajaEliminar = padre.querySelector(".caja");

  if (cajaEliminar) {
    padre.removeChild(cajaEliminar);
  }
};
