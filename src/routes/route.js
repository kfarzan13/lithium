const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// Create Book API

router.post("/createBook", BookController.createBook  )

// Create Author API

router.post("/createAuthor", BookController.createAuthor  )

// List of Chetan Bhagat Books API

router.get("/getBooks" , BookController.getBooksOfAuthor )


router.get("/getUpdate" , BookController.findPriceAndUpdate )


router.get("/getRange" , BookController.priceRange )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)



module.exports = router;