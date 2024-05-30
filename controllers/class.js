import classM from "../models/class.js"
import capstoneSub from "../models/capstoneSub.js";
import classSub from "../models/classSub.js";
// import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new classM(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const Prjsubmit = async (req, res, next) => {
  const newHotel = new classSub(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await classM.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
// export const deleteHotel = async (req, res, next) => {
//   try {
//     await Hotel.findByIdAndDelete(req.params.id);
//     res.status(200).json("Hotel has been deleted.");
//   } catch (err) {
//     next(err);
//   }
// };
// export const getHotel = async (req, res, next) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     res.status(200).json(hotel);
//   } catch (err) {
//     next(err);
//   }
// };
export const getProject = async (req, res, next) => {
//   const { min, max, ...others } = req.params;
  try {
    const hotels = await classM.find(); 
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const getSub = async (req, res, next) => {
  //   const { min, max, ...others } = req.params;
    try {
      const hotels = await classSub.find(); 
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };

// export const getsubProject = async (req, res, next) => {
//   //   const { min, max, ...others } = req.params;
//     try {
//       const hotels = await webcodeSub.find(); 
//       res.status(200).json(hotels);
//     } catch (err) {
//       next(err);
//     }
//   };
// export const countByCity = async (req, res, next) => {
//   const cities = req.query.cities.split(",");
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return Hotel.countDocuments({ city: city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };
// export const countByType = async (req, res, next) => {
//   try {
//     const hotelCount = await Hotel.countDocuments({ type: "hotel" });
//     const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
//     const resortCount = await Hotel.countDocuments({ type: "resort" });
//     const villaCount = await Hotel.countDocuments({ type: "villa" });
//     const cabinCount = await Hotel.countDocuments({ type: "cabin" });

//     res.status(200).json([
//       { type: "hotel", count: hotelCount },
//       { type: "apartments", count: apartmentCount },
//       { type: "resorts", count: resortCount },
//       { type: "villas", count: villaCount },
//       { type: "cabins", count: cabinCount },
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await classM.findById(req.params.id);
    // const list = await Promise.all(
    //   hotel.rooms.map((room) => {
    //     return Room.findById(room);
    //   })
    // );
    res.status(200).json(hotel)
  } catch (err) {
    next(err);
  }
};
