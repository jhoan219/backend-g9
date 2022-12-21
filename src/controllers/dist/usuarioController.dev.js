"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registro = registro;
exports.login = login;
exports.perfil = perfil;

var _usuarioModel = require("../models/usuarioModel.js");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function registro(req, res) {
  var data, password, nuevoUsuario;
  return regeneratorRuntime.async(function registro$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = req.body;
          console.log(data);
          _context.prev = 2;
          // generamos el hash de la contraseña del usuario
          password = _bcryptjs["default"].hashSync(data.password, 10);
          _context.next = 6;
          return regeneratorRuntime.awrap(_usuarioModel.Usuario.create(_objectSpread({}, data, {
            password: password
          })));

        case 6:
          nuevoUsuario = _context.sent;
          res.status(201).json({
            message: "Usuario creado exitosamente"
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            message: "Error al crear el usuario",
            content: _context.t0.message
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 10]]);
}

function login(req, res) {
  var data, usuarioEncontrado, payload, token;
  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = req.body; // {email: '...', password: '...'}

          _context2.next = 3;
          return regeneratorRuntime.awrap(_usuarioModel.Usuario.findOne({
            email: data.email
          }));

        case 3:
          usuarioEncontrado = _context2.sent;

          if (usuarioEncontrado) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: "El usuario no existe"
          }));

        case 6:
          if (_bcryptjs["default"].compareSync(data.password, usuarioEncontrado.password)) {
            // es la contraseña del usuario
            payload = {
              jti: usuarioEncontrado._id,
              nombre: usuarioEncontrado.nombre
            };
            token = _jsonwebtoken["default"].sign(payload, process.env.JWT_SECRET, {
              expiresIn: "1h"
            });
            res.json({
              message: "Bienvenido",
              content: token
            });
          } else {
            res.json({
              message: "Error al ingresar, la contraseña no es valida"
            });
          }

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function perfil(req, res) {
  var usuarioEncontrado;
  return regeneratorRuntime.async(function perfil$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.user); // seleccionamos solamente el nombre del usuario indicando las columnas separadas por espacio y la que no se le coloca un signo negativo (-)
          // const usuarioEncontrado = await Usuario.findById(req.user._id).select(
          //   "nombre email direcciones" // -_id"
          // );
          // Estamos utilizando una funcion de agregacion para seleccionar el usuario con sus agendas y ademas evitar mostrar el password pero solamente el usuario cuyo id sea el de req.user

          _context3.next = 3;
          return regeneratorRuntime.awrap(_usuarioModel.Usuario.aggregate().lookup({
            from: "agendas",
            // nombre de la tabla de donde voy a hacer el join
            localField: "agendas",
            // nombre de la columna que usare en mi tabla usuario
            foreignField: "_id",
            // nombre de la columna que usare en la tabla agendas
            as: "agendas" // alias

          }).match({
            _id: req.user._id
          }).project("-password"));

        case 3:
          usuarioEncontrado = _context3.sent;
          res.json({
            content: usuarioEncontrado
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}
//# sourceMappingURL=usuarioController.dev.js.map
