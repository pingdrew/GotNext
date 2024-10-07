const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
  content: { type: String, default: '' },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  timestamp: { type: Date, default: Date.now },
  visibility: { type: String, enum: ['public', 'private'], default: 'public' }
});

module.exports = mongoose.model('Post', postSchema);