import { Router } from "express";
import  serviciosRoutes  from "./servicios.routes.js";
import usuariosRoutes from "./usuarios.routes.js";

const router= Router()
//http://localhost:3000/api/servicios/test
router.use('/servicios' ,serviciosRoutes)
router.use('/usuarios', usuariosRoutes)

export default router