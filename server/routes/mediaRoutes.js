const express = require('express');
const { uploadMedia, getPostMedia, deleteMedia } = require('../controllers/mediaController');
const router = express.Router();

router.post('/', uploadMedia);  // Upload new media
router.get('/:id', getPostMedia);  // Get all media for a post by ID
router.delete('/:id', deleteMedia);  // Delete media by ID

module.exports = router;
