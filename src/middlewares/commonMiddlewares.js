const { isValidObjectId } = require("mongoose")
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
        if(isFreeAppUser.toLowerCase()==='true'){
            req.body.isFreeAppUser = true
        }
        else if(isFreeAppUser.toLowerCase()==='false' ){
            req.body.isFreeAppUser = false
        }
        next()
    }
    
}

// Middleware for user Id and Product Id validation

const IdValidation = async function(req, res, next){
    let { userId , productId } = req.body

    if(!userId) {
        return res.send("UserId is required")
    }

    if(!productId) {
        return res.send("ProductId is required")
    }

    if(!isValidObjectId(userId)){
        return res.send("userId is not a valid ObjectId")
    }

    let isValidUserId = await UserModel.findById(userId)
        if(!isValidUserId) {
        return res.send("UserId is invalid!")
    }

    if(!isValidObjectId(productId)){
        return res.send("productId is not a valid ObjectId")
    }

    let isValidProductId = await ProductModel.findById(productId)
    
    if(!isValidProductId) {
        return res.send("ProductId is invalid!")
    }

    next()
}

module.exports.headerValidation = headerValidation
module.exports.IdValidation = IdValidation
