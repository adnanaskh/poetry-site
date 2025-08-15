const mongoose = require('mongoose');
const PoetrySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  urduText: { type: String, required: true },
  englishText: { type: String, default: '' },
  image: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Poetry', PoetrySchema);