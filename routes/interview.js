import express from "express";
import {
//   countByCity,
//   countByType,
  createHotel,
  getProject
//   Prjsubmit,
//   updateHotel,
//   deleteHotel,
//   getHotel,
// getHotelRooms,
// getSub
//   getHotels,
//   updateHotel,
} from "../controllers/interview.js";
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

router.get("/", getProject);
router.post("/", createHotel);
// router.post("/submission", Prjsubmit);
// router.get("/submission", getSub);

// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/:id", getHotelRooms);

export default router;
