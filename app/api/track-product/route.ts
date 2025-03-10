import { NextResponse } from "next/server";
import connectDB from "@/utils/database";
import TrackedProduct from "@/models/TrackedProduct";
import scrapeProductDetails from "@/utils/scraper";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("Request body:", body);

    let { url } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Clean URL if it has duplicate `https://`
    url = url.replace(/^https:\/\/https:\/\//, "https://");

    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch (error) {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
    }

    const domain = parsedUrl.hostname.replace("www.", "");

    const allowedDomains = [
      "ajio.com",
      "myntra.com",
      "flipkart.com",
      "walmart.com",
      "amazon.in",
      "amazon.com",
    ];

    if (!allowedDomains.includes(domain)) {
      return NextResponse.json({ error: "Invalid e-commerce link" }, { status: 400 });
    }

    // Check if product already exists
    const existingProduct = await TrackedProduct.findOne({ url });
    if (existingProduct) {
      return NextResponse.json(
        { message: "Product already being tracked", product: existingProduct },
        { status: 200 }
      );
    }

    const { imageUrl, price, error } = await scrapeProductDetails(url);

    if (error) {
      console.error("Scraping error:", error);
      return NextResponse.json({ error: `Scraping error: ${error}` }, { status: 500 });
    }

    if (!imageUrl || !price) {
      return NextResponse.json(
        { error: "Failed to fetch product details. No image or price found." },
        { status: 500 }
      );
    }

    const newProduct = await TrackedProduct.create({
      url,
      domain,
      imageUrl,
      currentPrice: price,
    });

    return NextResponse.json(
      { message: "Product tracked successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error tracking product:", error);

    return NextResponse.json(
      {
        error: `Something went wrong: ${
          error instanceof Error ? error.message : JSON.stringify(error)
        }`,
      },
      { status: 500 }
    );
  }
}
