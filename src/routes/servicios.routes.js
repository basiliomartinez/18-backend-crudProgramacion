import { Router } from "express";
import { borrarServicio, crearServicio, editarServicio, listarServicios, obtenerServicioId, prueba } from "../controllers/servicios.controllers.js";

const router = Router()
//aqui diseñamos todas las rutas para trabajar con los servicios
//get-post-put o patch -delete 

router.route("/test").get(prueba)
router.route('/').post(crearServicio).get(listarServicios)
router.route('/:id').get(obtenerServicioId).put(editarServicio).delete(borrarServicio)

export default router