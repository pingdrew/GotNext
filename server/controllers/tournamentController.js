const Tournament = require('../models/Tournament');

// Create a tournament
exports.createTournament = async (req, res) => {
    try {
        const newTournament = new Tournament(req.body);
        await newTournament.save();
        res.status(201).json(newTournament);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all tournaments
exports.getTournaments = async (req, res) => {
    try {
        const tournaments = await Tournament.find().populate('created_by participants', 'username');
        res.status(200).json(tournaments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Join a tournament
exports.joinTournament = async (req, res) => {
    try {
        const tournament = await Tournament.findById(req.params.id);
        if (!tournament.participants.includes(req.user.id)) {
            tournament.participants.push(req.user.id);
            await tournament.save();
            res.status(200).json(tournament);
        } else {
            res.status(400).json({ message: "You are already a participant in this tournament" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a tournament
exports.deleteTournament = async (req, res) => {
    try {
        await Tournament.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Tournament deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
