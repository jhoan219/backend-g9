"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearPedido = void 0;

var _prisma = require("../prisma.js");

var crearPedido = function crearPedido(req, res) {
  var data, pedidos;
  return regeneratorRuntime.async(function crearPedido$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = req.body;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_prisma.Prisma.cabeceraPedido.create({
            data: {
              clienteId: data.clienteId,
              fechaEmision: data.fechaEmision,
              detalles: {
                create: data.pedidoDetalle
              }
            },
            select: {
              clienteId: true,
              fechaEmision: true,
              detalles: {
                select: {
                  id: true,
                  cantidad: true,
                  producto: {
                    select: {
                      id: true,
                      nombre: true
                    }
                  },
                  valorVenta: true
                }
              }
            }
          }));

        case 4:
          pedidos = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            message: "Pedido registrado",
            content: pedidos
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

exports.crearPedido = crearPedido;
//# sourceMappingURL=pedidos.controller.dev.js.map
