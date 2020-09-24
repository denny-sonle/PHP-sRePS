const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter product name"]
    },
    brand: {
        type: String,
        require: [true, 'Please enter product brand']
    },
    description: {
        type: String,
        required: [true, 'Please enter product description']
    },
    image: {
        type: String,
        required: [true, 'Please enter product image url']
    },
    expiryDate: {
        type: String,
        required: [true, 'Please enter product expiry date']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price']
    }
}, {timestamps: true});

ProductSchema.path('price').get(function(num) {
    return (num / 100).toFixed(2);
});

ProductSchema.path('price').set(function(num) {
    return num * 100;
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;