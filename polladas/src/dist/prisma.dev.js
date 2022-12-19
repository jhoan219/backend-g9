"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prisma = void 0;

var _client = _interopRequireDefault(require("@prisma/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// La conexion a nuestra base de datos
// Usando el patron singleton solamente generamos una conexion para todo nuestro proyecto
var Prisma = new _client["default"].PrismaClient();
exports.Prisma = Prisma;
//# sourceMappingURL=prisma.dev.js.map
