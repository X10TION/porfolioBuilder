const express = require('express')
const router = express.Router()
const { viewPorfolio, createPorfolio, updatePorfolio,deletePorfolio } = require('../controller/builderController')


// router.route('/porfolio')
//             .get(viewPorfolio) 
// @desc  User sign in to the platform 
/* @desc  User build the porfolo 
@method post 
@method get 
@method put 
@method delete
*/

router.route('/:id')
            .put(updatePorfolio)
            .delete(deletePorfolio)
            .post(createPorfolio)


module.exports = router