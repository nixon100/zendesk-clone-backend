import express from "express";
import { login, register,updateAuth } from "../controllers/auth.js";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js"

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.put("/:id", updateAuth);

export default router