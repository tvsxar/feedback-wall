import connectDB from "@/lib/db";
import Feedback from "./models";

export async function getAllFeedbacks() {
  await connectDB();
  return await Feedback.find().sort({ createdAt: -1 });
}

export async function createFeedback(data) {
  await connectDB();
  const feedback = await Feedback.create(data);
  return feedback;
}
