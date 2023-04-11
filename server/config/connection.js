const mongoose = require('mongoose');

// ❄️MX: Connect to MongoDB
// ❄️MX: mongo atlas uri: https://github.com/Maislinn/Project3_MERN/issues/39
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/petpal-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

