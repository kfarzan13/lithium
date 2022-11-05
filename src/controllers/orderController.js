const { count } = require("console")
const timestamp = require("moment")
const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")

const createOrder= async function (req, res) {
    let data = req.body
    let { userId , productId } = req.body
    let currentdate = timestamp().format("DD-MM-YYYY")
    let freeUser = req.headers["isfreeappuser"]

    if(freeUser.toLowerCase() === "true"){
        data.amount = 0
        data.isFreeAppUser = true
        data.date = currentdate
        let savedData= await OrderModel.create(data)
        return res.send({msg: savedData})
    }
    else if (freeUser.toLowerCase() === "false") {
        let userData = await UserModel.findById(userId)
        let userBalance = userData.balance
        let productData = await ProductModel.findById(productId)
        let productPrice = productData.price
        if (userBalance >= productPrice) {
            let NewBalance = userBalance - productPrice
            await UserModel.findOneAndUpdate(
                { _id: userId },
                { $set: { balance: NewBalance } }
            )
            data.amount = NewBalance
            data.date = currentdate
            

        let savedData= await OrderModel.create(data)
        return res.send({msg: savedData})
} else return res.send("Insufficient Balance!")
}
}

const getAllOrders = async function(req,res){
    let orderData = await OrderModel.find().populate('userId').populate('productId')
    console.log(orderData)
    res.send({msg : orderData})
}

module.exports.createOrder= createOrder
module.exports.getAllOrders= getAllOrders
