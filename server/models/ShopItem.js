const mongoose = require('mongoose');

const shopItemSchema = new mongoose.Schema({
  item_name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, default: '' },
  stock: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  image_url: { type: String, required: true }
});

module.exports = mongoose.model('ShopItem', shopItemSchema);