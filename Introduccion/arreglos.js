const arreglo = ["Texto", 456.1, false, { propiedad: "valor" }, [1, 2, 3]];
console.log(arreglo);

const amigos = ["Alejandro", "Miguel", "Juna"];
console.log(amigos[0]);

// Agregar elementos (mala práctica)
const colores = [];
colores[0] = "Rojo";
colores[1] = "Verde";
colores[3] = "Blanco";
colores[3] = "Amarillo";

console.log('El arreglo colores tiene:' + colores.length + ' colores!');

// Agregar elementos con el método push para agregar al final
colores.push('Azul');

console.log(colores);
