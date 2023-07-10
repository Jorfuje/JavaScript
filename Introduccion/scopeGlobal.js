/* Global Scope o Variables Globales
    - Son la variables declaradas fuera de una función.
    - Podemos acceder a ellas desde cualquier parte del código.
    - Podemos usar const, let y var.
*/
 var nombre = 'Jorge';
 console.log(nombre);

 const saludo = () => {
    console.log('Hola ' + nombre);

    nombre = 'Pancho';
    console.log('El nuevo nombre es ' + nombre);
 }

 saludo();