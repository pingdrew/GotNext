const express = require('express');
const { sendMessage, getMessages, deleteMessage } = require('../controllers/messageController');
const router = express.Router();

router.post('/', sendMessage);  // Send a message
router.get('/', getMessages);  // Get all messages for a user
router.delete('/:id', deleteMessage);  // Delete a message by ID

module.exports = router;
