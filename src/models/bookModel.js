const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: { 
        type: String, 
        reqired: true 
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    authorName: String,
    year: { 
        type: Number,
        default: 2021
    }, 
    tags: [String],
    totalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)
