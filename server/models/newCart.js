const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number,required: true},
    image: {type: String, required: true}
});

module.exports = mongoose.model('cart', cartSchema);