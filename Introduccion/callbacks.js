const obtenerPostDeUsuario = (usuario, callback) => {
  console.log(`Obteniendo los post de ${usuario} ...`);

  setTimeout(() => {
    let post = ["Post1", "Post2", "Post3"];
    callback(post);
  }, 2000);
};

obtenerPostDeUsuario("Jorge", (post) => {
  console.log(post);
});
