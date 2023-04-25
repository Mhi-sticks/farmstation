const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  surname: { type: String, required: true, trim: true },
  otherNames: { type: String, required: false, trim: true },
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
}, { timestamps: true });

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({_id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({token});
  await user.save();
  return token;
}
const User = mongoose.model('User', userSchema);

module.exports = User;
