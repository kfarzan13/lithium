const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let authorData = req.body
    let createdAuthor = await AuthorModel.create(authorData)
    res.send({data: createdAuthor})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData