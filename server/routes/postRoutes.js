const express = require('express');
const { createPost, getUserPosts, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();

router.post('/', createPost);  // Create a new post
router.get('/:id', getUserPosts);  // Get all posts for a user
router.put('/:id', updatePost);  // Update a post by ID
router.delete('/:id', deletePost);  // Delete a post by ID

module.exports = router;
