const mongoose = require('mongoose');

const newProduct = mongoose.Schema({
    productName: { type: String,required: true},
    productBrand: { type: String,required: true},
    productDescription: { type: String,required: true},
    price: { type: Number,required: true},
    storageLocation: { type: String,required: true},
    age: { type: Number,required: true},
    flavours: { type: Number,required: true},
    sizes: { type: Number,required: true},
    stock: { type: Number,required: true},
    vintage: {
        vintage1: { type: String,required: true},
        vintage2: { type: Number,required: true},
        vintage3: { type: Number,required: true},
    },
    variations: {
        flavour1: { type: Number,required: true},
        flavour2: { type: Number,required: true},
        flavour3: { type: Number,required: true},
    },
    size: {
        size1: { type: Number,required: true},
        size2: { type: Number,required: true},
        size3: { type: Number,required: true},
    },
    image: {type: String,required: true}
});

module.exports = mongoose.model('products', newProduct);