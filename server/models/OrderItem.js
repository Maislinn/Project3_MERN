const mongoose = require('mongoose');

const { Schema } = mongoose;
const Product = require('./Product');

const orderItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: Product,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    }
});

// const Category = mongoose.model('Category', categorySchema);

module.exports = orderItemSchema;