import tasklist from "../models/tasklist.js";
import capstoneSub from "../models/capstoneSub.js";
import webcodeSub from "../models/webcodeSub.js";
import webkata from "../models/webkata.js"



export const countBySub = async (req, res, next) => {
    try {
      const count = await webkata.countDocuments();
      res.status(200).json({ count });
    } catch (err) {
      next(err);
    }
  };