const express = require('express');
const { createGame, getGames, joinGame, deleteGame } = require('../controllers/gameController');
const router = express.Router();

router.post('/', createGame);  // Create a new game
router.get('/', getGames);  // Get all games
router.post('/:id/join', joinGame);  // Join a game by ID
router.delete('/:id', deleteGame);  // Delete a game by ID

module.exports = router;
