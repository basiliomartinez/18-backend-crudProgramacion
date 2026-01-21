import { Router } from "express";
import { crearUsuario, listarUsuario } from "../controllers/usuarios.controllers.js";

const router = Router();

//http://localhost:3000/api/servicios/test
router.route("/").get(listarUsuario).post(crearUsuario);

export default router