import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import PriceHistory from "@/lib/models/PriceHistory";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectToDB();
  const product = await PriceHistory.findOne({ productId: params.id });

  if (!product) {
    return NextResponse.json({ message: "No price history found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
