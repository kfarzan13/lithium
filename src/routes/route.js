const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const UserController= require("../controllers/userController")

router.post("/createBook", UserController.createBook  )

router.get("/getBooksData", UserController.getBooksData)

module.exports = router;