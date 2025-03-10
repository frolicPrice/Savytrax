// backend /api/get-tracked-products
import { NextResponse } from "next/server";
import connectDB from "@/utils/database";
import TrackedProduct from "@/models/TrackedProduct";

export async function GET() {
  try {
    await connectDB();

    const trackedProducts = await TrackedProduct.find();

    return NextResponse.json({ products: trackedProducts }, { status: 200 });
  } catch (error) {
    console.error("Error fetching tracked products:", error);
    return NextResponse.json({
      error: `Something went wrong: ${error instanceof Error ? error.message : JSON.stringify(error)}`
    }, { status: 500 });
  }
}
