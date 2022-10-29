const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let bookData = req.body
    let authorId = req.body.author
    let publisherId = req.body.publisher

    if(authorId) {

        let authorIdCheck = await authorModel.findById({ _id : authorId })

        if(authorIdCheck) {

            if(publisherId) {

                let publisherIdCheck = await publisherModel.findById({_id : publisherId})

                if(publisherIdCheck) {

                let CreatedBook = await bookModel.create(bookData)
                return res.send({data: CreatedBook})

                }

                else res.send({error : "publisherId is invalid !"})

            }  

            else res.send({error : "publisherId is required."})

        }

        else res.send({error : "authorId is invalid !"})

    } 

    else res.send({error : "authorId is required."}) 
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author',{authorName:1,age:1,address:1,rating:1,_id : 0}).populate('publisher',{name:1,headQuarter:1,_id:0})
    res.send({BooksData: books})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
