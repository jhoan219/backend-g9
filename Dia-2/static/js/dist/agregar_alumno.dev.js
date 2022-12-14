"use strict";

var agregar = document.getElementById("btn_agregar");
var nombre = document.getElementById("nombre");
var ape_paterno = document.getElementById("ape_paterno");
var ape_materno = document.getElementById("ape_materno");
var correo = document.getElementById("correo");
var num_emergencia = document.getElementById("num_emergencia");

var agregarEvento = function agregarEvento(e) {
  e.preventDefault();
  var data = {
    nombre: nombre.value,
    ape_paterno: ape_paterno.value,
    ape_materno: ape_materno.value,
    correo: correo.value,
    num_emergencia: num_emergencia.value
  };
  fetch("/agregar-alumno", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (request) {
    return request.json();
  }).then(function (data) {
    console.log(data); // window.location.href = "/mostrar-alumnos";
  })["catch"](function (error) {
    console.log("error al crear el alumno");
  });
};

agregar.addEventListener("click", agregarEvento);
//# sourceMappingURL=agregar_alumno.dev.js.map
