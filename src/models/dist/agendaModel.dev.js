"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Agenda = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var agendaSchema = new _mongoose["default"].Schema({
  asunto: {
    type: _mongoose["default"].Schema.Types.String,
    required: true,
    maxlength: 100
  },
  dia: {
    type: _mongoose["default"].Schema.Types.Date,
    required: true
  },
  horaInicio: {
    type: _mongoose["default"].Schema.Types.String,
    required: true,
    alias: "hora_inicio",
    validate: {
      validator: function validator(valor) {
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(valor);
      },
      message: "Error, el formato debe ser HH:MM"
    }
  },
  horaFin: {
    type: _mongoose["default"].Schema.Types.String,
    required: true,
    alias: "hora_fin",
    validate: {
      validator: function validator(valor) {
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(valor);
      },
      message: "Error, el formato debe ser HH:MM"
    }
  },
  // es una columna que servira para hacer la relacion a nivel de mongoose para poder vincular la agenda con el usuario
  usuario: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Usuario"
  }
});

var Agenda = _mongoose["default"].model("agendas", agendaSchema);

exports.Agenda = Agenda;
//# sourceMappingURL=agendaModel.dev.js.map
