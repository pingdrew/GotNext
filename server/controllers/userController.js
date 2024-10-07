const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('friends', 'username profile_pic');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add friend
exports.addFriend = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user.friends.includes(req.body.friendId)) {
            user.friends.push(req.body.friendId);
            await user.save();
            res.status(200).json(user);
        } else {
            res.status(400).json({ message: "Friend already added" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Remove friend
exports.removeFriend = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.friends = user.friends.filter(friend => friend.toString() !== req.body.friendId);
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
