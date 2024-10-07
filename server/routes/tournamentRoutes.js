const express = require('express');
const { createTournament, getTournaments, joinTournament, deleteTournament } = require('../controllers/tournamentController');
const router = express.Router();

router.post('/', createTournament);  // Create a new tournament
router.get('/', getTournaments);  // Get all tournaments
router.post('/:id/join', joinTournament);  // Join a tournament by ID
router.delete('/:id', deleteTournament);  // Delete a tournament by ID

module.exports = router;
