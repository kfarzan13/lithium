const PublisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisherData = req.body
    let createdPublisher = await PublisherModel.create(publisherData)
    res.send({data: createdPublisher})
}

const getPublishersData= async function (req, res) {
    let publishers = await PublisherModel.find()
    res.send({data: publishers})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getPublishersData