const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // firstName: { type: String, required: true, trim: true },
  // surname: { type: String, required: true, trim: true },
  // otherNames: { type: String, required: false, trim: true },
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error('Email is invalid');
    }
  },
  password: { type: String, required: true, minLength: 7, trim: true },
  // phoneNumber: { type: String, required: true },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, { timestamps: true });

// Generate authentication token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({_id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({token});
  await user.save();
  return token;
}

//login users
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Incorrect Email or password');
  const verified = await bcrypt.compare(password, user.password);
  console.log(verified);

  if (!verified) throw new Error('Incorrect password');
  return user;
}

userSchema.statics.confirmUserExists = async (email) => {
  const user = await User.findOne({ email });
  if (user) throw new Error('User aldready exists');
  return user;
}

userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});


const User = mongoose.model('User', userSchema);

module.exports = User;
