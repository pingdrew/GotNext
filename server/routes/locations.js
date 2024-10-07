const express = require('express');
const router = express.Router();
const Game = require('../models/Game'); // Import your Game model

// Get all unique locations from games
router.get('/', async (req, res) => {
    try {
        // Fetch all games and extract locations
        const games = await Game.find({}, 'location');
        const locations = games.map(game => game.location);

        // Send the unique locations as a response
        res.json(locations);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
