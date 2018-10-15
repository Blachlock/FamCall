const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childSchema = new Schema ({
  name: {type: String, required: true},
  birthday: {type: String, required:true},
  // photo: {type: String},
}, 
{timestamps: true});

const Child = mongoose.model('Child', childSchema);
module.exports = Child;