//router express
const { Router } = require('express');
//importar los controladores
const { automovilesGet, 
        automovilesPost, 
        automovilesPut, 
        automovilesDelete } = require('../controllers/automoviles');
const router = Router();

//GET
router.get('/', automovilesGet);
//POST
router.post('/', automovilesPost);
//PUT
router.put('/', automovilesPut);
//DELETE
router.delete('/', automovilesDelete);
//exports
module.exports = router;