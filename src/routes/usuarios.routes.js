import { Router } from "express";
import {
  crearUsuario,
  listarUsuarios,
  login,
} from "../controllers/usuarios.controllers.js";

const router = Router();

//http://localhost:3000/api/servicios/test
router.route("/").get(listarUsuarios).post(crearUsuario);
router.route("/login").post(login)
export default router;
