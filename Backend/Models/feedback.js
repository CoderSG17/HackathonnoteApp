const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    rating: { type:Number, required: true }, 
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const feedback = mongoose.model("feedback", FeedbackSchema);
module.exports = feedback;
