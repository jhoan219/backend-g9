import { Router } from "express";
import {
  actualizarProducto,
  crearProducto,
  eliminarProducto,
  listarProductos,
  traerProductoPorId
} from "../controllers/productos.controller.js";

export const productosRouter = Router();

productosRouter.post("/producto", crearProducto);
productosRouter.get("/producto", listarProductos);
productosRouter.get("/producto/:id", traerProductoPorId);
productosRouter.put("/producto/:id", actualizarProducto);
productosRouter.delete("/producto/:id", eliminarProducto);