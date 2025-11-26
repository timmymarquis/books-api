const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    author: { type: String, required: true },
    publicationNumber: { type: Number, required: true },
    ISBN: { type: String, required: true },
    dateOfPublication: { type: String, required: true },
    title: { type: String, required: true },
    publisher: { type: String, required: true }
}, { timestamps: true });

const Books = mongoose.model('Book', bookSchema);

module.exports = Books;