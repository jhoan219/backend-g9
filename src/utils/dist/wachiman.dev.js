"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vigilante = vigilante;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _usuarioModel = require("../models/usuarioModel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Middleware => es un controlador intermedio que se encarga de validar que la operacion se realice correctamente, si algo esta mal o invalido lo detendra y no permitira que pase al siguiente controlador (el siguiente controlador puede ser otro middleware o el controlador final)
function vigilante(req, res, next) {
  var token, resultado, usuarioEncontrado;
  return regeneratorRuntime.async(function vigilante$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Yo soy un middleware"); // next > si no le pasamos ningun parametro entonces dejara pasar, caso contrario detendra el ciclo y hasta ahi no mas llegara
          // Primero verificamos que tengamos una token
          // headers > cabecera de la token es ahi donde se envia el user-agent (host o servidor es), host (host del client) y otros headers que el cliente lo puede setear, aqui tbn se adjunta la autorizacion

          if (req.headers.authorization) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            message: "Se necesita una token para esta operacion"
          }));

        case 3:
          token = req.headers.authorization.split(" ")[1];
          console.log(token);
          _context.prev = 5;
          resultado = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
          console.log(resultado); //buscaremos a ese usuario

          _context.next = 10;
          return regeneratorRuntime.awrap(_usuarioModel.Usuario.findById(resultado.jti));

        case 10:
          usuarioEncontrado = _context.sent;

          if (usuarioEncontrado) {
            _context.next = 13;
            break;
          }

          throw new Error("Usuario no existe");

        case 13:
          // agregar ese usuario al req.user para que pueda ser utilizado luego
          req.user = usuarioEncontrado.toJSON();
          next();
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](5);
          return _context.abrupt("return", res.status(400).json({
            message: " Token invalida",
            content: _context.t0.message
          }));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 17]]);
}
//# sourceMappingURL=wachiman.dev.js.map
