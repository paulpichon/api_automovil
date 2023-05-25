//mongoose
const mongoose = require('mongoose');

//funcion para conectarnos al a base de datos MONGODB
const dbConnectionMongo = async() => {
    try {
        //conexion a la BD
        await mongoose.connect( process.env.MONGODB_CONN );
        console.log('La base de datos esta en linea');
    } catch (error) {
        console.log( error );
        throw new Error('Hubo un error al conectar con la BD');
    }
}
//exports
module.exports = dbConnectionMongo;