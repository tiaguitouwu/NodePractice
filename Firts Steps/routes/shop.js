const express = require('express')
const router = express.Router()
const {getAllProducts} = require('../controllers/productController')


router.get("/product", getAllProducts)

module.exports = router