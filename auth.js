```javascript
// Import required modules
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./userModel');

// Initialize router
const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).json({ message: 'Username already exists' });

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  const user = new User({
    username,
    password: hashedPassword,
    email
  });

  try {
    // Save user
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'Invalid username or password' });

  // Check password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid username or password' });

  // Create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).json({ token });
});

module.exports = router;
```
