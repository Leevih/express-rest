const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(receipts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
    });

    product.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        })
});

module.exports = router;