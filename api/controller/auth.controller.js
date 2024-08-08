import bcryptjs from "bcryptjs";
import User from "../models/user.models.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    password === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "all fields required" });
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json({ message: "signup is success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
