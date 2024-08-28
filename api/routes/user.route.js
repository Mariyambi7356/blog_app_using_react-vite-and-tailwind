import express from "express";

import { verifyToken } from "../utils/VerifyUser.js";
import { test, updateUser } from "../controller/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);

export default router;
