import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String },
    type: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);

export default Feedback;
