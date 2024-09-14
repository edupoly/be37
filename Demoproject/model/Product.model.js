var mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        "id": Number,
        "title": String,
        "price": Number,
        "description": String,
        "category": String,
        "image": String,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;