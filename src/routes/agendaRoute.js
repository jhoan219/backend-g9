import { Router } from "express";
import * as agendaController from "../controllers/agendaController.js";
import { vigilante } from "../utils/wachiman.js";

export const agendaRouter = Router();

agendaRouter
  .route("/agenda")
  .all(vigilante)
  .post(agendaController.crearAgenda)
  .get(agendaController.listarAgenda);