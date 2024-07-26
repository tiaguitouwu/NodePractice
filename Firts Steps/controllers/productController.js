const Product = require("../models/product")

exports.addProduct = async (req,res,next) => {
     
    const product = new Product(req.body.name, req.body.price)

    try {
        await product.save()
    } catch (err) {
        res.status(500).json({message:"something went wrong"})
        return
    }

    res.status(200).json({message: "Product added"})
}


exports.getAllProducts = (req,res,next) => {
    const product = Product.findAll()
    res.status(200).json({product})
}

exports.deleteProducts = async (req,res,next) =>{
    const id = req.params.id
    let result
    try {
        result = await Product.deleteOne(+id)   
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
     

    res.status(200).json({result})
}