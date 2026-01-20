import { Router } from "express";
import {
  borrarServicio,
  crearServicio,
  editarServicio,
  listarServicios,
  obtenerServicioId,
  prueba,
} from "../controllers/servicios.controllers.js";
import validacionServicio from "../../middlewares/validacionServicio.js";

const router = Router();
//aqui diseñamos todas las rutas para trabajar con los servicios
//get-post-put o patch -delete

router.route("/test").get(prueba);
router
  .route("/")
  .post([validacionServicio], crearServicio)
  .get(listarServicios);
router
  .route("/:id")
  .get(obtenerServicioId)
  .put([validacionServicio], editarServicio)
  .delete(borrarServicio);

export default router;
