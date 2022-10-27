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

// API to find book "Two states" and update price to 100 and return author name and updated price as response

router.get("/getUpdate" , BookController.findPriceAndUpdate )

// Find books between price range 50 - 100 and return book name and author name as response

router.get("/getRange" , BookController.priceRange )


module.exports = router;