import express from "express";
import { getProject,countBySub} from "../controllers/task.js";

const router = express.Router();
router.get("/submission", countBySub)
// router.post("/register", register)
// router.post("/login", login)
router.get("/",getProject )


export default router