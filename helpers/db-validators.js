//importamos el modelo
const Automovil = require("../models/automovil");

//funcion para verificar si existe un automovil por ID
const existeAutomovilPorId = async( id ) => {
    //buscar un registro por ID
    const existeAuto = await Automovil.findById( id );
    //si no existe el auto mostrar un error
    if ( !existeAuto ) {
        throw new Error(`El automovil con el ID ${ id } no existe en la BD`);
    }
}
//exports
module.exports = {
    existeAutomovilPorId
}