const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_pic: { type: String, default: '' },
  bio: { type: String, default: '' },
  location: {
    type: {
      type: String,
      enum: ['Point'], // Must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  joined_at: { type: Date, default: Date.now },
  last_active: { type: Date, default: Date.now },
  games_joined: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
  games_created: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
});

module.exports = mongoose.model('User', userSchema);