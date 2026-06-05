const mongoose = require('mongoose');
const { UserSchema } = require('../schemas/UserSchema');

// Basic pre-save hook to hash password if bcrypt is available
try {
  const bcrypt = require('bcryptjs');
  UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
} catch (err) {
  // bcrypt not installed — password stored as-is (less secure)
}

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;