const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true, });

const db = mongoose.connection;
db.once("open", function () {
  console.log("Database Connection successfull...");
});