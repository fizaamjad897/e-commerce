const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ensure User model is correctly defined
const router = express.Router();

// Signup API
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save(); // Save new user
  res.status(201).json({ message: 'User created successfully' });
});

// Login API
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }); // Find user by email
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.status(200).json({ message: 'Login successful', user });
});

module.exports = router;
