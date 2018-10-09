const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childSchema = new Schema ({
  name: {type: String, required: true, unique: true, trim: true},
  birthday: {type: String, required:true},
  budget: {type: Number},
}, 
{timestamps: true});

const Child = mongoose.model('Child', childSchema);
module.exports = Child;