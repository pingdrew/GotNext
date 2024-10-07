const express = require('express');
const { addItem, getItems, updateItem, deleteItem } = require('../controllers/shopController');
const router = express.Router();

router.post('/', addItem);  // Add a new shop item
router.get('/', getItems);  // Get all shop items
router.put('/:id', updateItem);  // Update a shop item by ID
router.delete('/:id', deleteItem);  // Delete a shop item by ID

module.exports = router;
