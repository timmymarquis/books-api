const Book = require('../models/Book');

// Add a new book
exports.addBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        return res.status(201).json({
            message: "Book added successfully",
            data: book
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
// Get all books

exports.getAllBooks = (async (req, res) => { 
    const books = await Book.find();
    console.log("All books", books);
});

// Get a book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });

        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
//Update a book by ID
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBook)
            return res.status(404).json({ message: "Book not found" });

        return res.status(200).json({
            message: "Book updated successfully",
            data: updatedBook
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook)
            return res.status(404).json({ message: "Book not found" });

        return res.status(200).json({
            message: "Book deleted successfully",
            data: deletedBook
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};