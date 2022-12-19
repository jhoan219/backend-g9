"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientesRouter = void 0;

var _express = require("express");

var _clientesController = require("../controllers/clientes.controller.js");

var clientesRouter = (0, _express.Router)();
exports.clientesRouter = clientesRouter;
clientesRouter.post("/cliente", _clientesController.crearCliente);
clientesRouter.get("/cliente", _clientesController.listarClientes);
clientesRouter.get("/cliente/:id", _clientesController.traerClientePorId);
clientesRouter.put("/cliente/:id", _clientesController.actualizarCliente);
clientesRouter["delete"]("/cliente/:id", _clientesController.eliminarCliente);
//# sourceMappingURL=clientes.routes.dev.js.map
