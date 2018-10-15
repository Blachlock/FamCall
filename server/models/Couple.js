const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coupleSchema = new Schema(
  {
    couple: { type: Schema.Types.ObjectId, ref: "Invitation" },
    parentOne: {type: Schema.Types.ObjectId, ref: "User"},
    parentTwo: {type: Schema.Types.ObjectId, ref: "User"},
    child: [{ type: Schema.Types.ObjectId, ref: "Child" }],
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  },
  { timestamps: true }
);

const Couple = mongoose.model("Couple", coupleSchema);
module.exports = Couple;