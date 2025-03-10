import mongoose from "mongoose";

const PriceHistorySchema = new mongoose.Schema({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  prices: [
    {
      date: { type: Date, default: Date.now },
      price: { type: Number, required: true },
    },
  ],
});

// Ensure the model is not recompiled multiple times
export default mongoose.models.PriceHistory || mongoose.model("PriceHistory", PriceHistorySchema);
