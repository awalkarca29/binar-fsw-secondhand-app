const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bargainSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    item: {
        type: String,
        required: true,
    },
    agree: {
        type: Boolean,
        require: true,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('Bargain', bargainSchema);