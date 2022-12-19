"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eliminarProducto = exports.actualizarProducto = exports.traerProductoPorId = exports.listarProductos = exports.crearProducto = void 0;

var _prisma = require("../prisma.js");

var crearProducto = function crearProducto(req, res) {
  var data, nuevoProducto;
  return regeneratorRuntime.async(function crearProducto$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = req.body; // {nombre: '...', precio: ..., cantidad: ... , disponibilidad: ...}

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_prisma.Prisma.producto.create({
            data: data // data: data
            // {
            //   nombre: data.nombre,
            //   precio: data.precio,
            //   cantidad: data.cantidad,
            //   disponibilidad: data.disponibilidad,
            // },

          }));

        case 4:
          nuevoProducto = _context.sent;
          console.log("hola");
          res.status(201).json({
            message: "producto creado exitosamente",
            content: nuevoProducto
          });
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          res.status(400).json({
            message: "Error al crear el producto",
            error: _context.t0.message
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.crearProducto = crearProducto;

var listarProductos = function listarProductos(req, res) {
  var productos;
  return regeneratorRuntime.async(function listarProductos$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_prisma.Prisma.producto.findMany());

        case 3:
          productos = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            message: "Productos encontrados",
            content: productos
          }));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: "Error en el servidor",
            error: _context2.t0.message
          }));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.listarProductos = listarProductos;

var traerProductoPorId = function traerProductoPorId(req, res) {
  var id, producto;
  return regeneratorRuntime.async(function traerProductoPorId$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_prisma.Prisma.producto.findUnique({
            where: {
              id: Number(id)
            }
          }));

        case 4:
          producto = _context3.sent;

          if (producto) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: "Producto no encontrado"
          }));

        case 7:
          return _context3.abrupt("return", res.status(200).json({
            message: "Producto encontrado",
            content: producto
          }));

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(500).json({
            message: "Error en el servidor",
            error: _context3.t0.message
          }));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.traerProductoPorId = traerProductoPorId;

var actualizarProducto = function actualizarProducto(req, res) {
  var id, data, findProduct, producto;
  return regeneratorRuntime.async(function actualizarProducto$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          data = req.body;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(_prisma.Prisma.producto.findUnique({
            where: {
              id: Number(id)
            }
          }));

        case 5:
          findProduct = _context4.sent;

          if (findProduct) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: "Producto no encontrado"
          }));

        case 8:
          _context4.next = 10;
          return regeneratorRuntime.awrap(_prisma.Prisma.producto.update({
            where: {
              id: Number(id)
            },
            data: {
              nombre: data.nombre,
              cantidad: data.cantidad,
              precio: data.precio,
              disponibilidad: data.disponibilidad
            },
            select: {
              id: true,
              nombre: true,
              cantidad: true,
              precio: true
            }
          }));

        case 10:
          producto = _context4.sent;
          return _context4.abrupt("return", res.status(201).json({
            message: "Producto actualizado",
            content: producto
          }));

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](2);
          return _context4.abrupt("return", res.status(500).json({
            message: "Error en el servidor",
            error: _context4.t0.message
          }));

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

exports.actualizarProducto = actualizarProducto;

var eliminarProducto = function eliminarProducto(req, res) {
  var id, findProduct, producto;
  return regeneratorRuntime.async(function eliminarProducto$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_prisma.Prisma.producto.findUnique({
            where: {
              id: Number(id)
            }
          }));

        case 4:
          findProduct = _context5.sent;

          if (findProduct) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: "Producto no encontrado"
          }));

        case 7:
          _context5.next = 9;
          return regeneratorRuntime.awrap(_prisma.Prisma.producto.update({
            where: {
              id: Number(id)
            },
            data: {
              disponibilidad: false
            },
            select: {
              id: true,
              nombre: true,
              disponibilidad: true
            }
          }));

        case 9:
          producto = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            message: "Producto eliminado",
            content: producto
          }));

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", res.status(500).json({
            message: "Error en el servidor",
            error: _context5.t0.message
          }));

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 13]]);
};

exports.eliminarProducto = eliminarProducto;
//# sourceMappingURL=productos.controller.dev.js.map
