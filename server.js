const express = require("express");
const itemRouter = require("./routes/item");
const cartRouter = require("./routes/cart");
const authRoutes = require("./routes/auth");
require("./db/mongoose");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(authRoutes);
app.use(itemRouter);
app.use(cartRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
