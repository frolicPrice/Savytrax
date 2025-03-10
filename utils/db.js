import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Ensure index creation (older versions)
      useFindAndModify: false, // Prevent deprecated methods
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Stop the server on connection failure
  }
};

export default connectDB;
