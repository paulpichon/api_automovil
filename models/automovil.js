//schema, model -> mongoose
const { Schema, model } = require('mongoose');

//Schema
const AutomovilSchema = Schema({
    marca: { 
        type: String,
        required: [true, 'La marca de automovil es obligatoria']
    },
    year: { 
        type: Number,
        required: [true, 'El año del automovil es obligatorio']
    },
    precio: { 
        type: Number,
        required: [true, 'El precio del vehiculo es obligatorio']
    },
    puertas: {
        type: Number,
        required: [true, 'El numero de puertas del vehiculo es obligatorio']
    },
    transmision: {
        type: String,
        required: [true, 'El tipo de transmision del vehiculo es obligatoria']
    },
    color: {
        type: String,
        required: [true, 'El color del vehiculo es obligatorio']
    },
    estatus_vehiculo: {
        type: Boolean,
        default: true
    }

});
//quitar __v de la respuesta 
AutomovilSchema.methods.toJSON = function() {
    //desestructurar lo que no quiero en la respuesta
    const { __v, ...automovil } = this.toObject();
    //retornamos todo aquello que no fue desestructurado en ...automovil
    return automovil;
}

//exports
module.exports = model('Automovil', AutomovilSchema);