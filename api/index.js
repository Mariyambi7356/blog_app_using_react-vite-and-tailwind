import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from './routes/comment.route.js'
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true }));

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRoutes);
app.use("/api/comment",commentRoutes)
// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({ success: false, statusCode, message });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Start Server
app.listen(3000, () => {
  console.log("Server is running successfully on port 3000");
});
