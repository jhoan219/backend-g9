"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireWildcard(require("express"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var servidor = (0, _express["default"])(); // use > sirve para agregar un middleware que validara la informacion dependiendo el orden en el que lo coloquemos
// llegue inforsmacion en formato JSON este middleware lo pueda convertir en una informacion legible y lo almacene en el req.body

var productos = [{
  nombre: "pollada",
  precio: 15.5,
  disponible: true
}, {
  nombre: "adobada",
  precio: 15.5,
  disponible: true
}, {
  nombre: "chichorranada",
  precio: 17.5,
  disponible: true
}, {
  nombre: "chuleteada",
  precio: 12.5,
  disponible: false
}];
servidor.get("/", function (req, res) {
  console.log("Entro aqui");
  res.status(200).json({
    message: "Bienvenido a mi API de express"
  });
});
servidor.route("/productos").get(function (req, res) {
  // devuelve todos los productos que esten disponible solo puedes utilizar el metodo filter
  var productoDisponibles = productos.filter(function (producto) {
    return producto.disponible === true;
  });
  res.status(200).json({
    content: productoDisponibles
  });
}).post(function (req, res) {
  console.log(req.body);
  var data = req.body;
  productos.push(data);
  res.status(201).json({
    message: "Producto creado exitosamente"
  });
});
servidor.listen(5000, function () {
  console.log("Servidor corriendo exitosamente en el puerto 5000");
});
//# sourceMappingURL=index.dev.js.map
