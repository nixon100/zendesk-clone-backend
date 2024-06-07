import express from "express";
import { login, register,updateAuth ,resetPassword, resetPassword2,resetPassword3,logout} from "../controllers/auth.js";
import {verifyAdmin, verifyUser,verifyToken} from "../utils/verifyToken.js"

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.put("/:id", updateAuth);
router.post("/reset-password", resetPassword);
router.post("/reset-password/:id/:token", resetPassword2);
router.get("/reset-password/:id/:token", resetPassword3);
router.get("/logout",logout)



export default router