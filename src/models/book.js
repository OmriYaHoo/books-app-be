let mongoose = require('mongoose');

let Book = mongoose.model('Book', {
    book_number: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    release_year: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = {Book};