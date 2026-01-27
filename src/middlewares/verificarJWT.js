import jwt from "jsonwebtoken";

const verificarJWT = (req, res, next) => {
  try {
    const authHeader = req.header("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "No hay token, permiso no valido" });
    }
    console.log(authHeader);

    //Separamos la palabra "Bearer fcqwzytcwycxgyacxgczwt.wqwxwwq.wxqwxwazaaz" del token real

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ mensaje: "No hay token en la peticion" });
    }
    const payload = jwt.verify(token, process.env.SECRETJWT);
    //puedo extraer la informacion del payload
    req.idUsuario = payload.idUsuario;
    next();
  } catch (error) {
    console.error(error);
    console.error("Error en JWT:", error.name);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        mensaje: "Tu sesión ha expirado, por favor vuelve a iniciar sesión.",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        mensaje: "Token inválido o malformado.",
      });
    }

    res.status(401).json({
      mensaje: "No se pudo autenticar el token.",
    });
  }
};

export default verificarJWT;
