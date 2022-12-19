"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eliminarCliente = exports.actualizarCliente = exports.traerClientePorId = exports.listarClientes = exports.crearCliente = void 0;

var _prisma = require("../prisma.js");

var crearCliente = function crearCliente(req, res) {
  var data, cliente;
  return regeneratorRuntime.async(function crearCliente$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = req.body;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_prisma.Prisma.cliente.create({
            data: data
          }));

        case 4:
          cliente = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            message: "Cliente creado",
            content: cliente
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).json({
            message: "Error en el servidor",
            error: _context.t0.message
          }));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.crearCliente = crearCliente;

var listarClientes = function listarClientes(req, res) {
  var clientes;
  return regeneratorRuntime.async(function listarClientes$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_prisma.Prisma.cliente.findMany());

        case 3:
          clientes = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            message: "Lista clientes",
            content: clientes
          }));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: "Erro inesperado",
            error: _context2.t0.message
          }));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.listarClientes = listarClientes;

var traerClientePorId = function traerClientePorId(req, res) {
  var id, cliente;
  return regeneratorRuntime.async(function traerClientePorId$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_prisma.Prisma.cliente.findUnique({
            where: {
              id: Number(id)
            }
          }));

        case 4:
          cliente = _context3.sent;

          if (cliente) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: "Cliente no encontrado"
          }));

        case 7:
          return _context3.abrupt("return", res.status(200).json({
            message: "Cliente encontrado",
            content: cliente
          }));

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(500).json({
            message: "Erro inesperado",
            error: _context3.t0.message
          }));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.traerClientePorId = traerClientePorId;

var actualizarCliente = function actualizarCliente() {
  var id, data, findCliente, cliente;
  return regeneratorRuntime.async(function actualizarCliente$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          data = req.body;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(_prisma.Prisma.cliente.findUnique({
            where: {
              id: Number(id)
            }
          }));

        case 5:
          findCliente = _context4.sent;

          if (findCliente) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: "Cliente no encontrado"
          }));

        case 8:
          _context4.next = 10;
          return regeneratorRuntime.awrap(_prisma.Prisma.cliente.update({
            data: data
          }));

        case 10:
          cliente = _context4.sent;
          return _context4.abrupt("return", res.status(201).json({
            message: "Cliente actualizado",
            content: cliente
          }));

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](2);
          return _context4.abrupt("return", res.status(500).json({
            message: "Erro inesperado",
            error: _context4.t0.message
          }));

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

exports.actualizarCliente = actualizarCliente;

var eliminarCliente = function eliminarCliente(req, res) {
  var id, findCliente, cliente;
  return regeneratorRuntime.async(function eliminarCliente$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_prisma.Prisma.cliente.findUnique({
            where: {
              id: Number(id)
            }
          }));

        case 4:
          findCliente = _context5.sent;

          if (findCliente) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: "Cliente no encontrado"
          }));

        case 7:
          _context5.next = 9;
          return regeneratorRuntime.awrap(_prisma.Prisma.cliente["delete"]({
            where: {
              id: Number(id)
            }
          }));

        case 9:
          cliente = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            message: "Cliente eliminado"
          }));

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", res.status(500).json({
            message: "Erro inesperado",
            error: _context5.t0.message
          }));

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 13]]);
};

exports.eliminarCliente = eliminarCliente;
//# sourceMappingURL=clientes.controller.dev.js.map
