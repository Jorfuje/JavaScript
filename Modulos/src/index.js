/*
    Named Imports
*/
import { nombre as nombreImportado, obtenerPost } from "./namedExports";
console.log("Mi nombre es " + nombreImportado);
console.log(obtenerPost());

/*  
    Namespace Imports
*/
import * as datos from "./namedExports";
console.log(datos.nombre);
console.log(datos.obtenerPost());

/*
    Default Imports
*/
import obtener from "./defautImports";
console.log(obtener());

/*
    Empty Imports
    Carga todo el código pero sin hacer ningun objeto.
*/
import "./emptyExports";
import { correo } from "./emptyExports";
console.log(correo);
