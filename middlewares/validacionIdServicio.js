import { param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionIdServicio = [
  param("id")
    .isMongoId()
    .withMessage("El id enviado no corresponde a un mongoId valido"),
  (req, res, next) => resultadoValidacion(req, res, next),
];
export default validacionIdServicio;
