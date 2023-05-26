//express validation
const { validationResult } = require("express-validator");

//funcion para validar campos(mostrar errores)
const validarCampos = ( req, res, next ) => {
    //validation result de express
    const errores = validationResult( req );
    //si no esta vacio "errores"
    if ( !errores.isEmpty() ) {
        //mostrar/devolver los errores
        return res.status( 404 ).json( errores );
    }
    //funcion para pasar al siguiente moddleware
    next();
}
//exports
module.exports = {
    validarCampos
}