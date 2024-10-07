const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  tournament_name: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  },
  sport_type: { type: String, required: true },
  date_time: { type: Date, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, enum: ['upcoming', 'ongoing', 'completed', 'canceled'], default: 'upcoming' },
  winner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  results: { type: String, default: '' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tournament', tournamentSchema);