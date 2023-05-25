//Importar la clase Server
const Server = require('./models/server');

//dotenv
require('dotenv').config()
//crear una instancia de la Clase
const server = new Server();
//llamar la funcion para escuchar el puerto
server.listen();