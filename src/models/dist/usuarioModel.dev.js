"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Usuario = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var direccionSchema = new _mongoose["default"].Schema({
  calle: _mongoose["default"].Schema.Types.String,
  numero: _mongoose["default"].Schema.Types.String,
  codigoPostal: {
    alias: "codigo_postal",
    // indicar como se llamara esta columna en la bd
    type: _mongoose["default"].Schema.Types.String
  }
}, {
  _id: false // esto solo se puede dar en sub documentos

});
var usuarioSchema = new _mongoose["default"].Schema({
  nombre: {
    type: _mongoose["default"].Schema.Types.String,
    required: true
  },
  email: {
    type: _mongoose["default"].Schema.Types.String,
    unique: true,
    required: true
  },
  password: {
    type: _mongoose["default"].Schema.Types.String,
    required: true
  },
  direcciones: [direccionSchema],
  // creamos ahora la relacion VIRTUAL entre los usuarios y sus agendas
  agendas: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Agenda"
  }]
}, {
  // https://mongoosejs.com/docs/guide.html#options
  timestamps: {
    createdAt: "fechaCreacion",
    updatedAt: "fechaActualizacion"
  }
});

var Usuario = _mongoose["default"].model("usuarios", usuarioSchema);

exports.Usuario = Usuario;
//# sourceMappingURL=usuarioModel.dev.js.map
