const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://codepen.io/pen'
}));

//IMPORT ROUTES
const postsRoute = require('./routes/posts');
const receiptsRoute = require('./routes/receipts');
const productsRoute = require('./routes/products');

app.use('/posts', postsRoute);
app.use('/receipts', receiptsRoute);
app.use('/products', productsRoute)

//CONNECT TO MONGODB
mongoose.connect(process.env.DB_CONNECTION, {  useUnifiedTopology: true , useNewUrlParser: true}, 
() => {
    console.log('connected to to mongo');
});


app.listen(8080);