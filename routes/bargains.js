const express = require('express');
const router = express.Router();

const {
    getAllBargain,
    getBargain,
    createBargain,
    deleteBargain,
    updateBargain
} = require('../controller/bargainController')

router.get('/', getAllBargain);
router.get('/:id', getBargain);
router.post('/', createBargain);
router.patch('/:id', updateBargain);
router.delete('/:id', deleteBargain);

module.exports = router;