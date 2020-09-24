const mongoose = require('mongoose');

const SaleItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: [true, 'Please select quantity']
    }
}, {timestamps: true});

SaleItemSchema.path('price').get(function(num) {
    return (num/100).toFixed(2);
});

SaleItemSchema.path('price').set(function() {
    return (product.price * quantity) * 100;
});

const SaleItem = mongoose.model('SaleItem', SaleItemSchema);

module.exports = SaleItem;