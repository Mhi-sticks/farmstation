const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../middleware/auth");
const User = require("../models/Users");
const Item = require("../models/item");
// const path = require("path");

const router = express.Router();

router.get("/", async (req, res) => {
  // try {
  //   const items = await Item.find({});
  //   res.status(200).send(items);
  // } catch (err) {
  //   res.status(400).send(err);
  // }
  res.send("HEllo world");
});

router.post("/signup", async (req, res) => {
  // if (!username || !email || !password) {
  //     throw new Error('Missing required fields');
  //   }
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ username, email });
    if (!user) throw new Error("User not found");

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) throw new Error("Invalid password");

    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(401).send("Invalid credentials");
  }
});

router.post("/logout", Auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send("Logged out");
  } catch (err) {
    res.status(500).send();
  }
});

// router.get("/profile", (req, res) => {
//   // send the profile HTML file as the response
//   res.sendFile(path.join(__dirname, "views", "profile.html"));
// });

module.exports = router;
