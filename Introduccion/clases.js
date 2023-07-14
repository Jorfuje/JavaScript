/*
    Estructura de una clase
    - Definición
    - Propiedades: La clase puede contener variables. Dentrode una clase se llaman propiedades.
    - Constructor: Es un método especial para inicializar un objeto creado a partir de una clase.
    - Métodos: La clase puede contener funciones. dentro de una clase se llaman métodos.
*/
class Usuario {
  tipo = "usuario";

  constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    console.log('Nuevo usuario registrado!');
  }
  obtenerNombreCompleto(){
    return `${this.nombre} ${this.apellido}`

  }
}

const usuario = new Usuario('Jorge', 'López');
console.log(usuario.obtenerNombreCompleto());

const usuario2 = new Usuario('Alejandro', 'Gracía');
console.log(usuario2.obtenerNombreCompleto());