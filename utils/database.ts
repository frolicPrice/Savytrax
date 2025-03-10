import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "your-mongodb-connection-string";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI, {
    dbName: "sujatainje14",
  });
  console.log("Connected to MongoDB");
};

export default connectDB;
