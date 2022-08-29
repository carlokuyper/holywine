const mongoose = require('mongoose');

const addProduct = mongoose.Schema({
    productName: { type: String,required: true},
    productBrand: { type: String,required: true},
    productDescription: { type: String,required: true},
    price: { type: Number,required: true},
    storageLocation: { type: String,required: true},
    vintage: {
        fiveYears: { type: String,required: true},
        tenYears: { type: Number,required: true},
        twelveYears: { type: Number,required: true},
    },
    variations: {
        flavour1: { type: Number,required: true},
        flavour2: { type: Number,required: true},
        flavour3: { type: Number,required: true},
    },
    size: {
        single: { type: Number,required: true},
        box: { type: Number,required: true},
        barrel: { type: Number,required: true},
    }
});

module.exports = mongoose.model('products', addProduct);