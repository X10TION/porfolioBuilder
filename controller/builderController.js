// @decs view porfolio 
// @get  GET /builder/v1/porfolio
// @public public

const builderModel = require("../models.js/builderModel");
const ErrorResponse = require('../utils/errorHandle')
// exports.viewPorfolio = (req, res, next) => {
//     res.send('<h1>VIEW MY Porfolio builder</h1>')

// }

// @decs create my porfolio 
// @post    POST  /builder/v1/porfolio
// @public pravite
exports.createPorfolio = async (req, res, next) => {
        const builder = await builderModel.create(req.body);
        res.status(201).json({
            sucess: true,
            data: builder
        })
}


// @decs UPDATE porfolio 
// @PUT  PuT /builder/v1/porfolio
// @public PRIVATE
exports.updatePorfolio = async (req, res, next) => {
    const builder = await builderModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
            if(!builder){
            return  next(new ErrorResponse(`you have not yet create a porfolio ${req.params.id}`,404))
            }  
    res.status(200).json({
        name: "Hurry!!! Changes Save Successfully",
   })
}


// @decs DELETE porfolio 
// @get  DELETE /builder/v1/porfolio
// @public PRIVATE
exports.deletePorfolio = async (req, res, next) => {
    const Builder = await builderModel.findByIdAndDelete(req.params.id)
    if(!Builder){
        return  next(new ErrorResponse(`We could not find user with ${req.params.id}`,404))
    }
res.status(200).json({
    name: "Oop!! too bad Porfolio Terminated"
   })

}

