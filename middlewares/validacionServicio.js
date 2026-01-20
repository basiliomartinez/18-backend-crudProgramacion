import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Servicio from "../src/models/servicio.js";

const validacionServicio = [
  body("servicio")
    .notEmpty()
    .withMessage("El servicio es un dato obligatorio")
    .isLength({ min: 5, max: 100 })
    .withMessage("El servicio debe tener entre 5 y 100 caracteres")
    .isString()
    .withMessage("El servicio debe ser un texto")
    .custom(async (valor, { req }) => {
      const servicioExistente = await Servicio.findOne({ servicio: valor });
      if (!servicioExistente) {
        return true;
      }

      //pregunta para validar si estoy editando el mismo servicio
      if (
        req.params?.id &&
        servicioExistente._id.toString() === req.params.id
      ) {
        return true;
      }
      throw new Error("El servicio ya existe en la base de datos");
    }),

  body("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .isFloat({
      min: 50,
      max: 1000000,
    })
    .withMessage("El precio debe estar entre $50 y $1000000"),

  body("imagen")
    .notEmpty()
    .withMessage("La imagen debe ser un dato obligatorio")
    .isString()
    .withMessage("La imagen debe ser una cadena de texto")
    .matches(/^(https?:\/\/.*\.(?:jpg|jpeg|png|webp))(?:\?.*)?$/)
    .withMessage(
      "La imagen debe ser una url valida que termine con .jpg, .jpeg, .png o .webp",
    ),

  body("categoria")
    .notEmpty()
    .withMessage("La categoria debe ser un dato obligatorio")
    .isString()
    .withMessage("La categoria debe ser una cadena de texto")
    .isIn(["Desarrollo Web", "Backend y API", "Consultoria", "Otros"])
    .withMessage(
      `La categoria debe ser unos de los siguientes valores: 'Desarrollo Web', 'Backend y API', 'Consultori', 'Otro'`,
    ),

  body("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion_breve es un dato obligatorio")
    .isLength({ min: 5, max: 250 })
    .withMessage("La descripcion_breve debe tener entre 5 y 100 caracteres")
    .isString()
    .withMessage("La descripcion_breve debe ser un texto"),

  body("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion_amplia es un dato obligatorio")
    .isLength({ min: 10, max: 500 })
    .withMessage("La descripcion_amplia debe tener entre 10 y 500 caracteres")
    .isString()
    .withMessage("La descripcion_amplia debe ser un texto"),

  (req, res, next) => resultadoValidacion(req, res, next),
];
export default validacionServicio;
