const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  game_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', default: null },
  is_read: { type: Boolean, default: false },
  is_deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Message', messageSchema);