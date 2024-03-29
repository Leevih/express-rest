const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    "title": {
        type: String,
        required: true,
    },
    "price": {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Product', ProductSchema);