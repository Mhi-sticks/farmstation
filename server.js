const express = require("express");
const itemRouter = require("./routes/item");
const cartRouter = require("./routes/cart");
const authRoutes = require("./routes/user");
const orderRoutes = require("./routes/order");
require("./db/mongoose");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static('views'));
app.use(authRoutes);
app.use(itemRouter);
app.use(cartRouter);
app.use(orderRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});