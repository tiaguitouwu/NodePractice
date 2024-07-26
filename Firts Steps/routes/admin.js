const express = require('express')
const router = express.Router()
const {addProduct,deleteProducts} = require('../controllers/productController')


router.post("/add-product", addProduct)

router.delete("/delete-product/:id", deleteProducts)

module.exports = router