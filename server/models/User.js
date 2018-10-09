const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true, trim: true},
  email: {type: String, required: true, match: /\S+@\S+\.\S+/, trim: true},
  name: {type: String, trim: true},
  phone: {type: Number, match: /^[0-9\-]+$/i, trim: true},
}, 
{timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;