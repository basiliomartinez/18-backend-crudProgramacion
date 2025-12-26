import { Router } from "express";

const router = Router()
//aqui diseñamos todas las rutas para trabajar con los servicios
//get-post-put o patch -delete

router.route("/test").get((req, res)=>{
    console.log ('consulta de prueba')
    res.send('Esto es un ejemplo de respuesta desde el backend')
})

export default router