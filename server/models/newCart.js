const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number,required: true},
    image: {type: String, required: true},
    vintage: {type: String, required: true},
    variations: {type: String, required: true},
    size: {type: String, required: true},
    qty: { type: Number,required: true},
});

module.exports = mongoose.model('cart', cartSchema);