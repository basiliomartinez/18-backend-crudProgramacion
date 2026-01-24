import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    //todo: Agregar validacion a los datos del usuario
    //hasehar el password
    const saltos = bcrypt.genSaltSync(10);
    console.log(saltos);
    const passwordHasheado = bcrypt.hashSync(req.body.password, saltos);
    req.body.password = passwordHasheado;

    const usuarioNuevo = new Usuario(req.body);
    await usuarioNuevo.save();
    res.status(201).json({ mensaje: "El usuario fue creado correctamente" });
  } catch (error) {
    console.error();
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar crear un usuario" });
  }
};
export const listarUsuarios = async (req, res) => {
  try {
    const listarUsuarios = await Usuario.find();
    if (listarUsuarios.length === 0) {
      return res.status(404).json({ mensaje: "No hay usuarios registrados" });
    }
    res.status(200).json(listarUsuarios);
  } catch (error) {
    console.error();
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar listar un usuario" });
  }
};
