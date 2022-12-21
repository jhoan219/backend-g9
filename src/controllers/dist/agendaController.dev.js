"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearAgenda = crearAgenda;
exports.listarAgenda = listarAgenda;

var _agendaModel = require("../models/agendaModel.js");

var _usuarioModel = require("../models/usuarioModel.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function crearAgenda(req, res) {
  var data, usuarioId, agendaCreada;
  return regeneratorRuntime.async(function crearAgenda$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = req.body;
          usuarioId = req.user._id;
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(_agendaModel.Agenda.create(_objectSpread({}, data, {
            usuario: usuarioId
          })));

        case 5:
          agendaCreada = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(_usuarioModel.Usuario.updateOne({
            _id: usuarioId
          }, {
            agendas: [].concat(_toConsumableArray(req.user.agendas), [agendaCreada._id])
          }));

        case 8:
          res.status(201).json({
            message: "Agenda creada exitosamente",
            content: agendaCreada
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          // aca ingresara si hay algun error ya sea por la validacion o por que el usuario no existe
          res.status(400).json({
            message: "Error al crear la agenda",
            content: _context.t0.message
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 11]]);
}

function listarAgenda(req, res) {
  var usuarioId, agendas;
  return regeneratorRuntime.async(function listarAgenda$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          usuarioId = req.user._id; // left outer join utilizando lo que vendria a hacer una clausula condicional cuando concuerde que solamente muestre las agendas de ese usuario

          _context2.next = 3;
          return regeneratorRuntime.awrap(_agendaModel.Agenda.aggregate([{
            $match: {
              usuario: usuarioId
            }
          }]).lookup({
            from: "usuarios",
            // aca va el nombre de la coleccion, NO EL NOMBRE DEL MODELO
            localField: "usuario",
            // la columna de la tabla agenda que usaremos
            foreignField: "_id",
            // la columna de la tabla usuarios que usaremos para la relacion
            as: "propietario" // en que columna se mostrara este join

          }));

        case 3:
          agendas = _context2.sent;
          console.log(agendas);
          res.json({
            content: agendas
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}
//# sourceMappingURL=agendaController.dev.js.map
