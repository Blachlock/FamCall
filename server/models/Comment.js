const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
  parent: { type: Schema.Types.ObjectId, ref: 'User' }, //req.user
  description: {type: String},
}, 
{timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;