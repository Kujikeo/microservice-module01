const mongoose = require('mongoose');
const CategoriesSchemas = new mongoose.Schema({
  name: String
})

module.exports = mongoose.model('category', CategoriesSchemas)