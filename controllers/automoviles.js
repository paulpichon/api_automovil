//importamos el modelo
const Automovil = require("../models/automovil");

const automovilesGet = (req, res) => {
    res.json({
        msg:'GET API - Controller'
    });
}
const automovilesPost = async(req, res) => {

    //body
    const { marca, year, precio, puertas, transmision, color } = req.body;
    //mongoose
    const automovil = new Automovil({ marca, year, precio, puertas, transmision, color });
    //guardar en la base de datos
    await automovil.save();
    //respuesta
    res.json( 
        automovil
    );
}
const automovilesPut = (req, res) => {
    res.json({
        msg:'PUT API - Controller'
    });
}
const automovilesDelete = (req, res) => {
    res.json({
        msg:'DELETE API - Controller'
    });
}
//exports
module.exports = {
    automovilesGet,
    automovilesPost,
    automovilesPut,
    automovilesDelete
}