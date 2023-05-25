const automovilesGet = (req, res) => {
    res.json({
        msg:'GET API - Controller'
    });
}
const automovilesPost = (req, res) => {
    res.json({
        msg:'POST API - Controller'
    });
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