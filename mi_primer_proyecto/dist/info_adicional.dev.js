"use strict";

var nombre = "eduardo";
var edad = 30;

var saludar = function saludar(nombre) {
  return "Hola ".concat(nombre);
}; // Esta es la forma de exportar variables, funciones, lo que sea usando el formato CommonJs


module.exports = {
  nombre: nombre,
  edad: edad,
  saludar: saludar
};
//# sourceMappingURL=info_adicional.dev.js.map
