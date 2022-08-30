const express = require('express')
const router = express.Router()
const { viewPorfolio, createPorfolio, updatePorfolio,deletePorfolio } = require('../controller/builderController')


router.route('/porfolio')
            .get(viewPorfolio)
            .post(createPorfolio)

router.route('/:id')
            .put(updatePorfolio)
            .delete(deletePorfolio)



module.exports = router