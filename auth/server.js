const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config/dev.env') });


const authRoutes = require('./routes/auth');


const app = express();
app.use(express.json());
app.use('./routes/auth', authRoutes);

mongoose.connect("mongodb+srv://trojan_user:iZWutlpMFqI6IMnv@farmstationtestdb.xc6trxf.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error(error));

app.listen(3000, () => console.log('Server running'));
