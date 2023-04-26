const express = require("express");
const Item = require("../models/item");
const Auth = require("../middleware/auth");

const router = new express.Router();

// create new Item
router.post("/items", Auth, async (req, res) => {
  try {
    const newItem = new Item({
      ...req.body,
      owner: req.user._id,
    });
    await newItem.save();
    res.status(201).send(newItem);
  } catch (err) {
    res.status(400).send({ message: "error" });
  }
});

// get an item from the database
router.get("/items:id", async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    if (!item) {
      res.status(404).send({ error: "Item not found" });
    }
    res.status(200).send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

// fetch all items will be used for the home page
router.get("/items", Auth, async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).send(items);
  } catch (err) {
    res.status(400).send(err);
  }
});

// allow product owners to be able to edit their product
router.patch("/items/:id", Auth, async (req, res) => {
  const updateData = Object.Keys(req.body);
  const allowedUpdates = ["name", "description", "category", "price"];
  const isValidOperation = updateData.every((data) =>
    allowedUpdates.includes(data)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid updates" });
  }
  try {
    const item = await Item.findOne({ _id: req.params.id });
    if (!item) {
      return res.status(400).send({ error: "Product do not exist" });
    }
    updateData.forEach((data) => (item[data] = req.body[data]));
    await item.save();
    res.send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

// will be called for deleting Item by User
router.delete("/items/:id", Auth, async (req, res) => {
  try {
    const deletedItem = await Item.findOneAndDelete({ _id: req.params.id });
    if (!deletedItem) {
      res.status(404).send({ error: "Item not found" });
    }
    res.send(deletedItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;