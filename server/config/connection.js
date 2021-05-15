const dbAtlas = config.get('MONGODB_URI')
const mongoose = require('mongoose');

mongoose.connect(dbAtlas || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
