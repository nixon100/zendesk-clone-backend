import express from "express";
import {CheckT,getCookie} from "../controllers/checkToken.js";
import {verifyAdmin, verifyUser,verifyToken } from "../utils/verifyToken.js"

const router = express.Router();

router.get("/",getCookie)






export default router