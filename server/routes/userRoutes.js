const express = require('express');
const { getUserProfile, updateProfile, addFriend, removeFriend } = require('../controllers/userController');
const router = express.Router();

router.get('/:id', getUserProfile);  // Get user profile by ID
router.put('/:id', updateProfile);  // Update user profile
router.post('/:id/add-friend', addFriend);  // Add a friend
router.post('/:id/remove-friend', removeFriend);  // Remove a friend

module.exports = router;
