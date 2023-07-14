class Usuario {
  constructor(usuario, password) {
    this.usuario = usuario;
    this.password = password;
  }

  obtenerPosts() {
    const post = ["post1", "post2"];
    return post;
  }
}

class Moderador extends Usuario {
  constructor(usuario, password, permisos) {
    super(usuario, password);
    this.permisos = permisos;
  }

  borrarPost(id) {
    if (this.permisos.includes("borrar")) {
      console.log(`El post con el ${id} ha sido eliminado!`);
    } else {
      console.log("No tienes los permisos para borrar post!");
    }
  }
}

const usuario = new Usuario("Jorge", "123");
console.log(usuario.obtenerPosts());
// console.log(usuario.permisos);
// usuario.borrarPost(1);

const usuario2 = new Moderador("Pancho", "654", ["editar", "borrar"]);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(7);
