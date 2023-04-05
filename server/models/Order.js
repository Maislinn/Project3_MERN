const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  // ❄️MX: added services array: ⤵️
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Service'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
