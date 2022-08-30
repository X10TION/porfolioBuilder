// @decs view porfolio 
// @get  GET /builder/v1/porfolio
// @public public

exports.viewPorfolio = (req, res, next) => {
    res.send('<h1>VIEW MY Porfolio builder</h1>')

}


// @decs create my porfolio 
// @post    POST  /builder/v1/porfolio
// @public pravite
exports.createPorfolio = (req, res, next) => {
    res.send('<h1><B>CREATE</B> MY Porfolio builder</h1>')

}


// @decs UPDATE porfolio 
// @PUT  PuT /builder/v1/porfolio
// @public PRIVATE
exports.updatePorfolio = (req, res, next) => {
    res.send('<h1>Update MY Porfolio builder</h1>')

}


// @decs DELETE porfolio 
// @get  DELETE /builder/v1/porfolio
// @public PRIVATE
exports.deletePorfolio = (req, res, next) => {
    res.send('<h1>Delete MY Porfolio builder</h1>')

}
