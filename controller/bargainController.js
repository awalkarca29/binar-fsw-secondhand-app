const mongoose = require('mongoose');
const Bargain = require('../models/bargainModel');

const getAllBargain = async (req, res) => {
    const bargain = await Bargain.find({}).sort({ createdAt: -1 })
    res.status(200).json(bargain);
}

const getBargain = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such bargain'});
    }

    const bargain = await Bargain.findById(id);

    if (!bargain) {
        res.status(400).json({ error: 'No such bargain'})
    }

    res.status(200).json(bargain);
};


const createBargain = async (req, res) => {
    const { title, price, item, agree } = req.body;
    try {
        const bargain = await Bargain.create({ title, price, item, agree });
        res.status(200).json(bargain);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteBargain = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such bargain '});
    }

    const bargain = await Bargain.findOneAndDelete({ _id: id });

    if (!bargain) {
        res.status(400).json({ error: 'No such bargain'});
    }

    res.status(200).json(bargain);
}

const updateBargain = async (req, res) => {
    const { id } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such bargain' });
    };

    const bargain = await Bargain.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!bargain) {
        res.status(400).json({ error: 'No such bargain '});
    }

    res.status(200).json(bargain);
}

module.exports = {
    getAllBargain,
    getBargain,
    createBargain,
    deleteBargain,
    updateBargain
}

