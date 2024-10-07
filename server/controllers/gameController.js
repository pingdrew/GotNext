const Game = require('../models/Game');

// Create game
exports.createGame = async (req, res) => {
    try {
        const newGame = new Game(req.body);
        await newGame.save();
        res.status(201).json(newGame);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all games
exports.getGames = async (req, res) => {
    try {
        const games = await Game.find().populate('created_by participants', 'username');
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Join game
exports.joinGame = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game.participants.includes(req.user.id)) {
            game.participants.push(req.user.id);
            await game.save();
            res.status(200).json(game);
        } else {
            res.status(400).json({ message: "You are already a participant" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete game
exports.deleteGame = async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Game deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
