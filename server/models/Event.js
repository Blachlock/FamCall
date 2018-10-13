const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
  children: [{ type: Schema.Types.ObjectId, ref: 'Child' }],
  startDate: {type: String, required:true},
  endDate: {type: String},
  startTime: {type: String, required: true},
  endTime: {type: String, required: true},
  title: {type: String},
  description: {type: String},
  comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
  parentCreated: {type: Schema.Types.ObjectId, ref: "User"}
}, 
{timestamps: true});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;