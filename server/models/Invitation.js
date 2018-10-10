const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invitationSchema = new Schema ({
  from: { type: Schema.Types.ObjectId, ref: 'User' },
  to: {type: String, required: true, match: /\S+@\S+\.\S+/, trim: true},
  phone: {type: Number, match: /^[0-9\-]+$/i, trim: true},
}, 
{timestamps: true});

const Invitation = mongoose.model('Invitation', invitationSchema);
module.exports = Invitation;