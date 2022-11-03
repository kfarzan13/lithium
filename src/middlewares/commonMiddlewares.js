const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")

// Middleware for Header Validation

const headerValidation = function(req, res, next){
    let isFreeAppUser = req.headers["isfreeappuser"]
    console.log(req.headers)
    if(!isFreeAppUser){
        return res.send("Error! Can't proceed, Header is missing.")
    }
    else{
        if(req.headers["isfreeappuser"]==='true'){
            req.body.isFreeAppUser = true
        }
        else if(req.headers["isfreeappuser"]==='false' ){
            req.body.isFreeAppUser = false
        }
        next()
    }
    
}

// Middleware for user Id and Product Id validation

const IdValidation = async function(req, res, next){
    let userId = req.body.userId
    let productId = req.body.productId
    let isValidUserId = await UserModel.findById(userId)
    console.log(isValidUserId)
    let isValidProductId = await ProductModel.findById(productId)
    console.log(isValidProductId)
    if(!userId) {
        return res.send("UserId is required")
    }
    if(!productId) {
        return res.send("ProductId is required")
    }
    if(!isValidUserId) {
        return res.send("UserId is invalid!")
    }
    if(!isValidProductId) {
        return res.send("ProductId is invalid!")
    }

    next()
}

module.exports.headerValidation = headerValidation
module.exports.IdValidation = IdValidation
