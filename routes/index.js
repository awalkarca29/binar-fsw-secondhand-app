const express = require('express');
const router = express.Router();

const article = require('./product');

router.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'welcome to my store',
        data: null
    });
});

router.use('/product', product);

module.exports = router;