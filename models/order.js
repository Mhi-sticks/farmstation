const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectID,
      required: true,
      ref: "User",
    },
    items: [
      {
        itemId: {
          type: ObjectID,
          ref: "Item",
          required: true,
        },
        name: { type: String, required: true },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
