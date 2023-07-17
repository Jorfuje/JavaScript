// Forma 1 - Palabra export
/* export const nombre = "Jorge";

export const obtenerPost = () => {
  return ["post1", "post2", "post3"];
}; */

// Forma 2 - Final del documento
const nombre = "Jorge";

const obtenerPost = () => {
  return ["post1", "post2", "post3"];
};

export { nombre, obtenerPost };
