import { Router } from "express";
import {
  crearUsuario,
  listarUsuarios,
} from "../controllers/usuarios.controllers.js";

const router = Router();

//http://localhost:3000/api/servicios/test
router.route("/").get(listarUsuarios).post(crearUsuario);

export default router;
