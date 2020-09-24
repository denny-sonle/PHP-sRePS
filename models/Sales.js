const mongoose = require('mongoose');

const SalesScheme = new mongoose.Schema({
    sale_items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SaleItem"
    }],
    total: {
        type: Number
    }
}, {timestamps: true});

SalesScheme.path('total').get(function(num) {
    return (number/100).toFixed(2);
});

SalesScheme.path('total').set(function(num) {
    return num*100;
});

const Sales = mongoose.model('Sales', SalesScheme);

module.exports = Sales;