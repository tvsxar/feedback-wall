import connectDB from "@/lib/db";
import Feedback from "./models";

await connectDB();

export async function getAllFeedbacks() {
  return await Feedback.find().sort({ createdAt: -1 });
}

export async function createFeedback(data) {
  const feedback = await Feedback.create(data);
  return feedback;
}
