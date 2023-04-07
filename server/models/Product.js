// ❄️ MX: product model: includes 30min/60min/recurring/long-term services
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  services: [{
    type: String
  }],
  categories: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
// ❄️ MX: added code above ⤴️