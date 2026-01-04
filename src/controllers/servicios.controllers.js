import Servicio from "../models/servicio.js";

export const prueba = (req, res) => {
  console.log("consulta de prueba");
  res.send("Esto es un ejemplo de respuesta desde el backend");
};

export const crearServicio = async (req, res) => {
  try {
    const servicioNuevo = new Servicio(req.body);
    await servicioNuevo.save();
    res.status(201).json({ mensaje: "El servicio fue creado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar crear un servicio" });
  }
};

export const listarServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.status(200).json(servicios);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar listar un servicio" });
  }
};

export const obtenerServicioId = async (req, res) => {
  try {
    console.log(req.params.id);
    const servicioBuscado = await Servicio.findById(req.params.id);
    if (!servicioBuscado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro el servicio con el Id enviado" });
    }
    res.status(200).json(servicioBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error al intentar buscar el servicio por Id",
    });
  }
};

export const editarServicio= async(req, res)=>{
    try{
const servicioBuscado = await Servicio.findById(req.params.id)
   if (!servicioBuscado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro el servicio con el Id enviado" });
    }
// aqui queremos editar el servicio
await Servicio.updateOne({_id: req.params.id}, req.body)
 res.status(200).json({
      mensaje: "El servicio fue actualizado correctamente",
    });
    }catch(error){
            console.error(error);
    res.status(500).json({   
      mensaje: "Ocurrio un error al intentar editar un servicio",
    });

    }
}

export const borrarServicio= async(req, res)=>{
    try{
const servicioBorrado = await Servicio.findByIdAndDelete(req.params.id)
   if (!servicioBorrado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro el servicio con el Id enviado" });
    }

 res.status(200).json({
      mensaje: "El servicio fue borrado correctamente",
    });
    }catch(error){
            console.error(error);
    res.status(500).json({   
      mensaje: "Ocurrio un error al intentar editar un servicio",
    });

    }

}