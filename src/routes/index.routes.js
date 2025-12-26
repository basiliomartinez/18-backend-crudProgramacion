import { Router } from "express";
import  serviciosRoutes  from "./servicios.routes.js";

const router= Router()
//http://localhost:3000/api/servicios/test
router.use('/servicios' ,serviciosRoutes)

export default router