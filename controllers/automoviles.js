//importamos el modelo
const Automovil = require("../models/automovil");

const automovilesGet = async(req, res) => {

    //limite y desde
    //const { limite = 5, desde = 0 } = req.query;
    //mostrar todos los automoviles
    //const automoviles = await Automovil.find()
        //limite de registros a traer
        //.limit( limite )
        //traer registros a partir desde
        //.skip( desde );
        //mostrar el total de registros
        //const total = await Automovil.countDocuments();
        
        //consulta
        const query = { estatus_vehiculo:true };

        //con promise.all hacemos los 2 awaits al mismo tiempo
        const [ automoviles, total ] = await Promise.all([
            Automovil.find( query ),
            Automovil.countDocuments( query )
        ]);


    res.json({
        total,
        automoviles
    });
}
const automovilesPost = async(req, res) => {

    //body
    const { marca, modelo, year, precio, puertas, transmision, color } = req.body;
    //mongoose
    const automovil = new Automovil({ marca, modelo, year, precio, puertas, transmision, color });

    //guardar en la base de datos
    await automovil.save();
    //respuesta
    res.json( 
        automovil
    );
}
const automovilesPut = async(req, res) => {

    //params
    const { id } = req.params;
    //body
    const { _id, ...resto } = req.body;
    //actualizar
    const automovil = await Automovil.findByIdAndUpdate(id, resto, { 
        //actualizar consulta
        new: true
    });


    res.json( automovil );
}
const automovilesDelete = async(req, res) => {
    //id
    const { id } = req.params;
    //eliminar registro
    //const automovil = await Automovil.findByIdAndRemove( id )
    //cambiar el estatus del automovil
    const automovil = await Automovil.findByIdAndUpdate( id, { estatus_vehiculo: false }, {
        new: true
    });
    res.json({
        automovil
    });
}
//exports
module.exports = {
    automovilesGet,
    automovilesPost,
    automovilesPut,
    automovilesDelete
}