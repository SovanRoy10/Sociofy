import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

mongoose
  .connect(process.env.DATABASE as string)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log("DB CONNECTION ERROR => ", err));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
