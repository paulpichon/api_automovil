//router express
const { Router } = require('express');
//importar los controladores
const { automovilesGet, 
        automovilesPost, 
        automovilesPut, 
        automovilesDelete } = require('../controllers/automoviles');
//express validator
const { check } = require('express-validator');
//importar middleware para mostrar los errores
const { validarCampos } = require('../middlewares/validar-campos');
//verificar si existe el automovil por ID
const { existeAutomovilPorId } = require('../helpers/db-validators');
const router = Router();

//GET
router.get('/', [
        //validar que limite y desde sean numeros
        //check('limite', 'El parametro LIMITE debe ser de tipo NUMERO').optional().isNumeric(),
        //check('desde', 'El parametro DESDE debe ser de tipo NUMERO').optional().isNumeric(),
        //middleware para mostrar los errores
        //validarCampos
], automovilesGet);
//POST
router.post('/', [
        //validar que sea solo STRING en el campo MARCA
        check('marca', 'El campo MARCA no debe estar vacio, deben estar en mayusculas y no se permiten números.').trim().not().isNumeric().notEmpty().isUppercase(),
        //validar que sea STRING en el campo MODELO
        check('modelo', 'El campo MODELO no debe estar vacio y deben estar en mayusculas.')
                .trim()
                .notEmpty()
                .isUppercase(),
        //Validar que sean solo números en campo AÑO
        check('year', 'El campo AÑO no debe estar vacio y solo permite números').isNumeric(),
        //Validar que sean solo números en el campos PRECIO
        check('precio', 'El campo PRECIO no debe estar vacio y solo permite números').isNumeric(),
        //Validar que sean solo números en el campo PUERTAS
        check('puertas', 'El campo PUERTAS no debe estar vacio y solo permite números').isNumeric(),
        //Validar que solo sea STRING en el campo TRASMISION
        check('transmision', 'El campo TRANSMISION no debe estar vacio: AUTOMATICO, MANUAL')
                .isIn(['AUTOMATICO', 'MANUAL']),
        //Validar que solo sea STRING en el campo COLOR
        check('color', 'El campo COLOR no debe estar vacio y deben estar en mayusculas')
                .trim()
                .notEmpty()
                .not()
                .isNumeric()
                .isUppercase(),
        //middleware para mostrar los errores
        validarCampos
], automovilesPost);
//PUT
router.put('/:id', [
        //verificar que sea un mongo ID valido
        check('id', 'El ID no es valido').isMongoId(),
        //validar que el ID exista en la BD
        check('id').custom( existeAutomovilPorId ),
        //validar que sea solo STRING en el campo MARCA
        check('marca', 'El campo MARCA no debe estar vacio, deben estar en mayusculas y no se permiten números.').optional().trim().not().isNumeric().notEmpty().isUppercase(),
        //validar que sea STRING en el campo MODELO
        check('modelo', 'El campo MODELO no debe estar vacio y deben estar en mayusculas.').optional()
                .trim()
                .notEmpty()
                .isUppercase(),
        //Validar que sean solo números en campo AÑO
        check('year', 'El campo AÑO no debe estar vacio y solo permite números').optional().isNumeric(),
        //Validar que sean solo números en el campos PRECIO
        check('precio', 'El campo PRECIO no debe estar vacio y solo permite números').optional().isNumeric(),
        //Validar que sean solo números en el campo PUERTAS
        check('puertas', 'El campo PUERTAS no debe estar vacio y solo permite números').optional().isNumeric(),
        //Validar que solo sea STRING en el campo TRASMISION
        check('transmision', 'El campo TRANSMISION no debe estar vacio: AUTOMATICO, MANUAL').optional().isIn(['AUTOMATICO', 'MANUAL']),
        //Validar que solo sea STRING en el campo COLOR
        check('color', 'El campo COLOR no debe estar vacio y deben estar en mayusculas').optional()
                .trim()
                .notEmpty()
                .not()
                .isNumeric()
                .isUppercase(),
        check('estatus_vehiculo', 'El campo ESTATUS_VEHICULO debe ser de tipo BOOLEANO').optional().isBoolean(),
        //middleware para mostrar los errores
        validarCampos
], automovilesPut);
//DELETE
router.delete('/:id', [
        //verificar que sea un mongo ID valido
        check('id', 'El ID no es valido').isMongoId(),
        //validar que el ID exista en la BD
        check('id').custom( existeAutomovilPorId ),
        //middleware para mostrar los errores
        validarCampos
], automovilesDelete);
//exports
module.exports = router;