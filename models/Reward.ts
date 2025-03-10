import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  rewardPoints: { type: Number, default: 0 },
  referrals: { type: Number, default: 0 },
  referralCode: { type: String, unique: true }, // Unique code for sharing
  referredBy: { type: String }, // Track who referred this user
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
