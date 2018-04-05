const mongoose = require('mongoose');
const {Book} = require('./book');

let User = mongoose.model('User', {
    userName: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true,
        minLength: 2,
        trim: true,
    },
    catalog: {
        type: Array,
        ref: Book,
    }
});

module.exports = {User};