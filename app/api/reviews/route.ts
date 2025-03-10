import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";

import Review from "@/models/Review"; // Make sure this model exists!

export async function POST(req: NextRequest) {
  try {
    await connectToDB(); // Ensure MongoDB is connected

    const { user, rating, review } = await req.json();

    if (!user || !rating || !review) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const newReview = new Review({ user, rating, review });
    await newReview.save();

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error("❌ Error saving review:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
