const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({   
    allCart: { type: String, required: true},
});

module.exports = mongoose.model('newOrder', orderSchema);