const personaArreglo = ["Carlos", 27, "correo@ejemplo.com", true, true];

const persona = {
  nombre: "Carlos",
  edad: 27,
  correo: "correo@ejemplo.com",
  suscripciones: {
    web: true,
    correo: true,
  },
  coloresFavorito: ["Azul", "Negro"],
  saludo: function () {
    alert("Hola");
  },
};

console.log(persona.nombre);
// console.log(persona["edad"]);

const variable = 'suscripciones';
// console.log(persona[variable]);

// console.log(persona.suscripciones.correo);

persona.pais = 'México';
persona.pais = 'Japón';

console.log(persona);

persona.saludo();