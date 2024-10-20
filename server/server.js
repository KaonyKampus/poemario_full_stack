import {createServer} from "http"
import router from "./router.js";


const server = createServer(router);

//2.Defino el puerto local ya que aun no se monta en un servidor web, sino local(puerto 8000 o 8080)
const port = 8000;

//3.Definir una callback inicia el servidor
const ready = ()=> console.log("The SERVER is ready on port:  " + port);

//4.Levantar el servidor
server.listen(port, ready)
//escucho el puerto de la variable port para llevantar el servidor "server"
//Y luego levanto la callBack que me va a informar que el servidor se levanto efectivamente.

