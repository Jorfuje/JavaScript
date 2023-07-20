const endpoint = "https://api.npoint.io/2a6149d741aa3f956230";
// fetch(endpoint)
//   .then((respuesta) => {
//     console.log("El servidor respondio.");

//     const promesa = respuesta.json();
//     promesa.then((datos) => {
//         console.log(datos.nombre);
//     }).catch((error) => {
//         console.log(error);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/*
    Ejemplo con async/Await
*/
const obtenerDatos = async () => {
  const respuesta = await fetch(endpoint);
  
  const datos = await respuesta.json();
  console.log(datos);
};
obtenerDatos();
