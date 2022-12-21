"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usuarioRouter = void 0;

var _express = require("express");

var _usuarioController = require("../controllers/usuarioController.js");

var _wachiman = require("../utils/wachiman.js");

var usuarioRouter = (0, _express.Router)();
exports.usuarioRouter = usuarioRouter;
usuarioRouter.post("/registro", _usuarioController.registro);
usuarioRouter.post("/login", _usuarioController.login);
usuarioRouter.get("/perfil", _wachiman.vigilante, _usuarioController.perfil);
//# sourceMappingURL=usuarioRoute.dev.js.map
