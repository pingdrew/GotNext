const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  media_url: { type: String, required: true },
  media_type: { type: String, enum: ['image', 'video'], required: true },
  uploaded_at: { type: Date, default: Date.now },
  game_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', default: null },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', default: null },
  tournament_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', default: null }
});

module.exports = mongoose.model('Media', mediaSchema);