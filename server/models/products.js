const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    productDescription: {
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
    inStock: {
        type: Number,
        required: true
    },
    storageLocation: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('products', productSchema);