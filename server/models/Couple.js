const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coupleSchema = new Schema ({
  parentOne: { type: Schema.Types.ObjectId, ref: 'User' },
  parentTwo: { type: Schema.Types.ObjectId, ref: 'User' },
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  children: [{type: Schema.Types.ObjectId, ref: 'Child'}]
}, 
{timestamps: true});

const Couple = mongoose.model('Couple', coupleSchema);
module.exports = Couple;