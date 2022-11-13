const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Middleware
// app.use('/', () => {
//     console.log("Middleware");
// });

// Routes
app.get('/', (req, res) => {
    res.send('Home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to DB');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);