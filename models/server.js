//express
const express = require('express');
//cors
const cors = require('cors')

class Server {
    //constructor
    constructor() {
        //app express
        this.app = express();
        //puerto
        this.port = process.env.PORT || 3000;
        //ruta principal
        this.automovilesPath = '/api/automoviles'


        //middleware
        this.middlewares();
        //routes
        this.routes();

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