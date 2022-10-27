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

// Get all Books written by any Author name

const getBooksOfAuthor= async function (req, res) {
    let author= req.body.author

    let findId= await AuthorModel.findOne( { author_name : "Chetan Bhagat" } )
    
    let allBooksOfAuthor = await BookModel.find( { author_id : { $eq: findId.author_id } } )

    res.send({msg: allBooksOfAuthor})
}

// 

const findPriceAndUpdate= async function (req, res) {

    let findId= await BookModel.findOne( { name : "Two states" } )
    let id = findId.author_id

    let updatedPrice= await BookModel.findOneAndUpdate( { name : "Two states" } , { price : 100 } ).select( {price : 1 , _id : 0} )

    let newData= await AuthorModel.findOne( { author_id : { $eq: id } } ).select( { author_name : 1 , _id : 0} )

    res.send({AuthorName : newData.author_name , Price : updatedPrice.price })
}

// 4th task

const priceRange= async function (req, res) {

    let rangedData= await BookModel.find( { price : { $gte : 50 , $lte : 100 } } ).select({ author_id : 1 , name : 1 , _id : 0 })

    let id = rangedData.map ( element => element.author_id )

    let AuthorName= await AuthorModel.find( { author_id : { $in : id } } )

    rangedData.forEach( book => {

        let author1 = AuthorName.find( author => book.author_id === author.author_id )
        console.log(author1)

        book.author_id = author1.author_name

    })

    res.send({msg: rangedData })
}



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBooksOfAuthor= getBooksOfAuthor
module.exports.findPriceAndUpdate= findPriceAndUpdate
module.exports.priceRange= priceRange
