//express
const express = require('express');
//cors
const cors = require('cors');
//importar funcion para conexion a la BD
const dbConnectionMongo = require('../database/config');

class Server {
    //constructor
    constructor() {
        //app express
        this.app = express();
        //puerto
        this.port = process.env.PORT || 3000;
        //ruta principal
        this.automovilesPath = '/api/automoviles'


        //llamar metodo para conectar a la BD
        this.conectarDB();
        //middleware
        this.middlewares();
        //routes
        this.routes();

    }
    //metodo para llamar la funcion para conectar a la BD
    async conectarDB() {
        //funcion para conectar a MONGO
        await dbConnectionMongo();
    }
    //middlewares
    middlewares() {
        //cors
        this.app.use(cors());
        //archivo publico
        this.app.use( express.static('public') );
        //parsear el body 
        this.app.use( express.json() );
    }
    //metodos
    //rutas
    routes() {
        //ruta principal de la API
        this.app.use(this.automovilesPath, require('../routes/automovil'));
    }
    //listen
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`);
        });
    }

}
//exports
module.exports = Server;