import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  user: string;
  rating: number;
  review: string;
}

const ReviewSchema = new Schema<IReview>({
  user: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
