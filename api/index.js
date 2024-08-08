import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"
const app = express();
dotenv.config();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running successfully");
});

app.use("/api/user", userRouter);
app.use("/api/auth",authRouter);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });
