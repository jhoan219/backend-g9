"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pedidosRouter = void 0;

var _express = require("express");

var _pedidosController = require("../controllers/pedidos.controller.js");

var pedidosRouter = (0, _express.Router)();
exports.pedidosRouter = pedidosRouter;
pedidosRouter.post("/pedido", _pedidosController.crearPedido);
//# sourceMappingURL=pedidos.routes.dev.js.map
