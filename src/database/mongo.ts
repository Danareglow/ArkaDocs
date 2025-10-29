import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const MONGODB_ATLAS_URL = process.env.MONGODB_ATLAS_URL;

if (!MONGODB_ATLAS_URL) {
  console.warn(
    "MONGODB_ATLAS_URL is not defined in the environment variables — skipping DB connection"
  );
}



export const connectToDatabaseMongoAtlas = async (): Promise<
  typeof mongoose
> => {
  if (!MONGODB_ATLAS_URL) {
    return mongoose;
  }
  try {
    const connection = await mongoose.connect(MONGODB_ATLAS_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log("Successfully connected to MongoDB Atlas");
    return connection; // Retornamos la conexión de mongoose
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    process.exit(1);
  }
};

mongoose.connection.on("error", (err: unknown) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app termination");
  process.exit(0);
});
