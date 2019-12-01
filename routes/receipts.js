const express = require('express');
const router = express.Router();
const Receipt = require('../models/Receipt');


//RETURNS ALL THE RECEIPTS
router.get('/', async (req, res) => {
    try {
        const receipts = await Receipt.find();
        res.json(receipts);
    } catch {
        res.json({ message: err })
    }
});

//SUBMITS A RECEIPT
router.post('/', (req, res) => {
    const receipt = new Receipt({
        products: req.body.products,
    });

    receipt.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(req.body)
            res.json({ message: err });
        })
});

//SPECIFIC POST
router.get('/:receiptId', async (req, res) => {
    try {
        const receipt = await Receipt.findById(req.params.receiptId);
        res.json(receipt);
    } catch (err) {
        res.json({ message: err })
    }

});

//DELETE A SPECIFIC POST
router.delete('/:receiptId', async (req, res) => {
    try {
        const removedReceipt = await Receipt.remove({ _id: req.params.receiptId });
        res.json(removedReceipt);
    } catch (err) {
        res.json({ message: err });
    }

});

/* //UPDATE POST
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set:
                    { title: req.body.title }
            })
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});
 */
module.exports = router;