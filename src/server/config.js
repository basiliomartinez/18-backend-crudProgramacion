import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
  }

  middlewares() {
    //inicializamos los middlewares que necesitamos
    this.app.use(cors()); //permite escuchar conexiones remotas
    this.app.use(express.json()); //permite interpretar los datos json que llegan en una solicitud
    this.app.use(morgan("dev")); //ofrece datos extras en la terminal del backend
    //configuracion archivo estatico
    const __dirname = dirname(fileURLToPath(import.meta.url));
    //console.log(__dirname + `../../public`)
    this.app.use(express.static(__dirname + `/../../public`));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.info(`El servidor se esta ejecutando en los puerto http://localhost:${this.port}/`)
    );
  }
}
