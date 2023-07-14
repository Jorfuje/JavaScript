class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }

  static borrar(id_usuario) {
    console.log(
      `El usuario con id: ${id_usuario} ha sido borrado de la base de datos.`
    );
  }

  static registrados = 1200;
}

// const usuario = new Usuario("Jorge", "correo@correo.com");
// console.log(usuario);
// usuario.borrar(2);
Usuario.borrar(7);
console.log(Usuario.registrados);