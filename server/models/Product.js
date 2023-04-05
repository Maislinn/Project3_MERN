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
  }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// const Product = require('./models/product');
// const dropIn30 = new Product({
//   name: 'Drop-In Visit 30 MIN',
//   description: 'Litter Box Cleaning, Feeding',
//   price: 20.00,
//   services: ['Litter Box Cleaning', 'Feeding']
// });

// const dropIn60 = new Product({
//   name: 'Drop-In Visit 60 MIN',
//   description: 'Litter Box Cleaning, Feeding, Playing, Petting',
//   price: 35.00,
//   services: ['Litter Box Cleaning', 'Feeding', 'Playing', 'Petting']
// });

// const recurring30 = new Product({
//   name: 'Recurring Visits 30 MIN',
//   description: '3 Days Minimum - 10 Days Maximum (RATE of $15.00 Each Visit), Includes everything in a 30-minute visit',
//   price: 15.00,
//   services: ['Litter Box Cleaning', 'Feeding']
// });

// const recurring60 = new Product({
//   name: 'Recurring Visits 60 MIN',
//   description: '3 Days Minimum - 10 Days Maximum (RATE of $30.00 Each Visit), Includes everything in a 60-minute visit',
//   price: 30.00,
//   services: ['Litter Box Cleaning', 'Feeding', 'Playing', 'Petting']
// });

// const longTerm = new Product({
//   name: 'Long-Term Care',
//   description: '11 Days to 30 Days (RATE of $15.00 Each Visit), Includes everything in a 30-minute visit',
//   price: 15.00,
//   services: ['Litter Box Cleaning', 'Feeding']
// });

// module.exports = {
//   Product,
//   dropIn30,
//   dropIn60,
//   recurring30,
//   recurring60,
//   longTerm
// };


// ❄️ MX: added code above ⤴️