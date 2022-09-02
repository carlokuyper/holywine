const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    productName: { type: String, required: true},
    productBrand: { type: String, required: true},
});

module.exports = mongoose.model('newOrder', orderSchema);