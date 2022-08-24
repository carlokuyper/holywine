const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    vintage: {
        type: Number,
        required: true
    },
    variations: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('orders', orderSchema);