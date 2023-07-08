const ususario = {
  nombre: "Luis",
  pais: "Japón",
};

/* if(usuario.pais === 'México'){
    console.log('El usuario es mexicano!');
} else if(usuario.pais === 'Colombia'){
    console.log('El usuario es colombiano!');
} else if(usuario.pais === 'España'){
    console.log('El usuario es español!');
} else{
    console.log('El ususario es de algún otro país!');
} */

switch (ususario.pais) {
  case "México":
    console.log("El usuario es mexicano!");
    break;
  case "España":
    console.log("El usuario es español!");
    break;
  default:
    console.log("El ususario es de algún otro país!");
}
