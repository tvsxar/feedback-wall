import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { getAllFeedbacks, createFeedback } from "@/lib/services";

export async function GET() {
  try {
    await connectDB();
    const feedbacks = await getAllFeedbacks();
    return NextResponse.json(feedbacks, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const newFeedback = await createFeedback(data);
    return NextResponse.json(newFeedback, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
