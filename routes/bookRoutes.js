const express = require('express');
const router = express.Router();
const { addBook,
     getAllBooks ,
        getBookById ,
        updateBook ,
        deleteBook
    } = require('../controllers/bookController');

router.post('/add', addBook);
 router.get('/', getAllBooks);

module.exports = router;
