const mongoose = require('mongoose');



const ReceiptSchema = mongoose.Schema({
    products: [
        {
            "title": {
                type: String,
                required: true,
            },
            "price": {
                type: Number,
                required: true,
            },
            "date": {
                type: Date,
                default: Date.now(),
            },
        }
    ],
    "total": {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Receipt', ReceiptSchema);