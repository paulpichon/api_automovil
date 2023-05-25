const automovilesGet = (req, res) => {
    res.json({
        msg:'GET API - Controller'
    });
}
const automovilesPost = (req, res) => {

    //body
    const body = req.body;

    res.json({
        body
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