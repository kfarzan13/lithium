const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

// Create Book Function

const createBook= async function (req, res) {
    let data= req.body
    let id= req.body.author_id

    let idCheck= await BookModel.findOne( { author_id : { $eq: id } } )

    if(idCheck) {
        return res.send({msg: "ID already exist"})
    }

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

// Create Author Function

const createAuthor= async function (req, res) {
    let data= req.body
    let id= req.body.author_id

    let idCheck= await AuthorModel.findOne( { author_id : { $eq: id } } )

    if(idCheck) {
        return res.send({msg: "ID already exist"})
    }

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

// Get all Books written by Chetan Bhagat

const getBooksOfAuthor= async function (req, res) {
    let author= req.body.author

    let findId= await AuthorModel.findOne( { author_name : "Chetan Bhagat" } )
    
    let allBooksOfAuthor = await BookModel.find( { author_id : { $eq: findId.author_id } } )

    res.send({msg: allBooksOfAuthor})
}

// Find book "Two states" and update price to 100 and return author name and updated price as response

const findPriceAndUpdate= async function (req, res) {

    let findId= await BookModel.findOne( { name : "Two states" } )
    let id = findId.author_id

    let updatedPrice= await BookModel.findOneAndUpdate( { name : "Two states" } , { price : 100 } ).select( {price : 1 , _id : 0} )

    let newData= await AuthorModel.findOne( { author_id : { $eq: id } } ).select( { author_name : 1 , _id : 0} )

    res.send({AuthorName : newData.author_name , Price : updatedPrice.price })
}

// Find books between price range 50 - 100 and return book name and author name as response

const priceRange= async function (req, res) {

    let bookList= await BookModel.find( { price : { $gte : 50 , $lte : 100 } } ).select({ author_id : 1 , name : 1 , _id : 0 })
    console.log(bookList)

    let id = bookList.map ( book => book.author_id )
    // console.log(id)

    let AuthorName= await AuthorModel.find( { author_id : { $in : id } } ).select({ author_id : 1 , author_name : 1, _id : 0 })
    // console.log(AuthorName)

    bookList.forEach( book => {

        let author = AuthorName.find( author => book.author_id === author.author_id )
        console.log(author)        

        book.author_id = author.author_name
        
    })
    res.send({msg: bookList })
}



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBooksOfAuthor= getBooksOfAuthor
module.exports.findPriceAndUpdate= findPriceAndUpdate
module.exports.priceRange= priceRange
