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
    description: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publication_date: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = {Book};