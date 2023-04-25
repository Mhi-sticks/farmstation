const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

router.get('/', async (req,res) => {
  res.send("HEllo world");
})

router.post('/signup', async (req, res) => {
    if (!username || !email || !password) {
        throw new Error('Missing required fields');
      }
      try {
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ email, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing up');
    }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) throw new Error('Invalid password');

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;
