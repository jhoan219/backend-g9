"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productosRouter = void 0;

var _express = require("express");

var _productosController = require("../controllers/productos.controller.js");

var productosRouter = (0, _express.Router)();
exports.productosRouter = productosRouter;
productosRouter.post("/producto", _productosController.crearProducto);
productosRouter.get("/producto", _productosController.listarProductos);
productosRouter.get("/producto/:id", _productosController.traerProductoPorId);
productosRouter.put("/producto/:id", _productosController.actualizarProducto);
productosRouter["delete"]("/producto/:id", _productosController.eliminarProducto);
//# sourceMappingURL=productos.routes.dev.js.map
