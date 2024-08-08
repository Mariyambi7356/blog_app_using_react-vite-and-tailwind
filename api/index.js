import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

const app = express();
dotenv.config();

app.listen(3000, () => {
  console.log("Server is running successfully");
});

app.use("/api/user", userRouter);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });
