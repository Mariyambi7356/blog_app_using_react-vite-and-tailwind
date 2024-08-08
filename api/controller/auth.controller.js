import bcryptjs from "bcryptjs";
import User from "../models/user.models.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    password === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "all fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json({ message: "signup is success" });
  } catch (error) {
    next(error);
  }
};
