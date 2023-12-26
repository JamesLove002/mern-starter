import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import characterRouter from "./routes/character";

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Thoth connection established"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

const app = express();
app.use(express.json());
const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/character", characterRouter);
