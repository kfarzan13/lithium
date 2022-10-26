const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const BookList= async function (req, res) {

    let bookList= await BookModel.find( ).select( { bookName : 1 , authorName : 1 , _id : 0 } )
    res.send({msg: bookList})
}

const getBookByYear= async function (req, res) {
    let givenyear = req.body.year

    let bookList= await BookModel.find( { year : {  $eq : givenyear } } )
    res.send({msg: bookList})
}

const getParticularBooks = async function (req, res) {
    let enteredyear = req.body.year
    let enteredname = req.body.name
    let enteredauthor = req.body.author
    let enteredprice = req.body.price
    let enteredpages = req.body.pages
    let enteredavailability = req.body.available
    let enteredtags = req.body.tags

    let anyDataCheck= await BookModel.find( { $or: [{ year : {$eq: enteredyear} } , { bookName : {$eq: enteredname} } , { authorName : {$eq: enteredauthor} } , { "prices.indianPrice" : {$eq: enteredprice} } , { "prices.europePrice" : {$eq: enteredprice} } , { tags : {$eq: enteredtags} } , { totalPages : {$eq: enteredpages} } , { stockAvailable : {$eq: enteredavailability} }]} )
    res.send({msg: anyDataCheck})
}

const getXINRBooks = async function (req, res) {

    let XINRbooks= await BookModel.find( { "prices.indianPrice" : { $in: [ "100INR" , "200INR" , "500INR" ] } } )
    res.send({msg: XINRbooks})
}

const getRandomBooks = async function (req, res) {

    let randomBooks= await BookModel.find( { $or: [ { totalPages : { $gt: 500 } } , {stockAvailable : {$eq : true}} ] } )
    res.send({msg: randomBooks})
}


module.exports.createBook= createBook
module.exports.getBookByYear= getBookByYear
module.exports.BookList= BookList
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks = getRandomBooks