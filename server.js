require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.status(200).json({success: true, message: "API works Perfectly"})
});


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(process.env.PORT, () =>
            console.log(`Server running on port ${process.env.PORT}`)
        );
    })
    .catch((err) => console.log("DB Connection Error:", err));

app.listen(PORT, () => {
  console.log(`Running on localhost:${PORT}`); 
});