import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI || 'your-mongodb-connection-string');
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export default dbConnect;
