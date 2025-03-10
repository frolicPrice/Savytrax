import mongoose from "mongoose";

const TrackedProductSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  domain: { type: String, required: true },
  imageUrl: { type: String, required: true },
  currentPrice: { type: String, required: true },
});

const TrackedProduct = mongoose.models.TrackedProduct || mongoose.model("TrackedProduct", TrackedProductSchema);

export default TrackedProduct;
