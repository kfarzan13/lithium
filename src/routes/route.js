const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createOrder', commonMW.headerValidation, commonMW.IdValidation, OrderController.createOrder)

router.post('/createProduct', ProductController.createProduct)

router.post('/createUser', commonMW.headerValidation , UserController.createUser)



router.get('/getAllOrders', OrderController.getAllOrders )


module.exports = router;