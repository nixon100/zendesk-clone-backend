import tasklist from "../models/tasklist.js";
import capstoneSub from "../models/capstoneSub.js";
import webcodeSub from "../models/webcodeSub.js";
import codekata from "../models/codekata.js";



export const countBySub = async (req, res, next) => {
    try {
      const count = await codekata.countDocuments();
      res.status(200).json({ count });
    } catch (err) {
      next(err);
    }
  };
  export const totalmark = async (req, res, next) => {
    try {
      const count = await codekata.find();
      // const markTotals = count.reduce((acc, current) => {
      //   if (!acc[current.mark]) {
      //     acc[current.mark] = 0;
      //   }
      //   acc[current.mark] += current.mark;
      //   return acc;
      // }, {});
      res.status(200).json({count});
    } catch (err) {
      next(err);
    }
  };
  export const Prjsubmit = async (req, res, next) => {
  const newHotel = new codekata(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};