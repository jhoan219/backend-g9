"use strict";

// import isodd from "is-odd";
// Forma de importar librerias, y funcionabilidades de otros archivos usando el formato CommonJS
// https://nodejs.org/api/modules.html
var isodd = require("is-odd");

var informacion = require("./info-adicional");

var esPar = isodd(15);
console.log("hola");
console.log(esPar); // ahora utilizamos lo que hemos exportado desde el otro archivo

console.log(informacion.edad);
var saludo = informacion.saludar("Rigoberto");
console.log(saludo);
//# sourceMappingURL=practica.dev.js.map
