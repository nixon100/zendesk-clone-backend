import express from "express";
import {
//   countByCity,
//   countByType,
countBySub,
totalmark,
Prjsubmit
//   Prjsubmit,
//   updateHotel,
//   deleteHotel,
//   getHotel,
// getHotelRooms,
// getSub
//   getHotels,
//   updateHotel,
} from "../controllers/codekata.js";
// import Hotel from "../models/Hotel.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

// //CREATE
// router.post("/", verifyAdmin, createHotel);

// //UPDATE
// router.put("/:id",updateHotel);
// //DELETE
// router.delete("/:id", verifyAdmin, deleteHotel);
// //GET

// router.get("/find/:id", getHotel);
// //GET ALL


router.get("/submission", countBySub)
router.get("/total", totalmark)

router.post("/submission", Prjsubmit);
// router.get("/submission", getSub);

// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/:id", getHotelRooms);

export default router;
