const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');
const receiptsRoute = require('./routes/receipts');
const productsRoute = require('./routes/products');
const testRoute = require('./routes/testend');


app.use('/posts', postsRoute);
app.use('/receipts', receiptsRoute);
app.use('/products', productsRoute);
app.use('/testend', testRoute);

//CONNECT TO MONGODB
/* mongoose.connect(process.env.DB_CONNECTION, {  useUnifiedTopology: true , useNewUrlParser: true}, 
() => {
    console.log('connected to to mongo');
});

 */
// TESTING MONGODB CONNECTION WITH A HARDCODED URI, TO SEE IF THAT'S THE PROBLEM WITH HEROKU
mongoose.connect('mongodb+srv://admin:admin@cluster0-6a7dz.mongodb.net/test?retryWrites=true&w=majority', 
{ useUnifiedTopology: true, useNewUrlParser: true },
() => {
    console.log('connected to mongo');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
