// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create
router.post('/', async (req, res) => {
  const user = new User(req.body);
  const saved = await user.save();
  res.json(saved);
});

// Read all
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update
router.put('/:id', async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

module.exports = router;
