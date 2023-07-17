//  Forma 1 - Mediante palabras export default
/*  export default () => {
  return {
    nombre: "Jorge",
    correo: "correo@correo.com",
  };
}; */

// Forma 2 - Final de documento
const obtenerUsuario = () => {
  return {
    nombre: "Jorge",
    correo: "correo@correo.com",
  };
};
export default obtenerUsuario;
