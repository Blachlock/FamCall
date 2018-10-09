const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
  startDate: {type: String, required:true},
  endDate: {type: String},
  startTime: {type: String, required: true},
  endTime: {type: String, required: true},

/*   time: {type: String, required: true}, 
  duration: {type: Number}, */

  status: {type: String, enum: ['Confirmado', 'Cancelado'], default: 'Confirmado'},
  children: [{ type: Schema.Types.ObjectId, ref: 'Child' }],
  title: {type: String},
  description: {type: String},
  comment: { type: Schema.Types.ObjectId, ref: 'Comment' }
}, 
{timestamps: true});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;