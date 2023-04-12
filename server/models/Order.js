const mongoose = require('mongoose');

const { Schema } = mongoose;

// import schema for order items
const orderItemSchema = require('./OrderItem')

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  orderItems: [
    orderItemSchema 
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
