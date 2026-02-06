import { Router } from "express";
import {
  borrarServicio,
  crearServicio,
  editarServicio,
  listarServicios,
  obtenerServicioId,
  prueba,
} from "../controllers/servicios.controllers.js";
import validacionServicio from "../middlewares/validacionServicio.js";
import validacionIdServicio from "../middlewares/validacionIdServicio.js";
import verificarJWT from "../middlewares/verificarJWT.js";
import upload from "../helpers/upload.js";
import errorMulter from "../middlewares/errorMulter.js";

const router = Router();
//aqui diseñamos todas las rutas para trabajar con los servicios
//get-post-put o patch -delete

router.route("/test").get(prueba);
router
  .route("/")
  .post([verificarJWT, upload.single('imagen'), errorMulter, validacionServicio], crearServicio)
  .get(listarServicios);
router
  .route("/:id")
  .get(validacionIdServicio, obtenerServicioId)
  .put([verificarJWT, upload.single('imagen'),validacionIdServicio, validacionServicio], editarServicio)
  .delete(verificarJWT, validacionIdServicio, borrarServicio);

export default router;
