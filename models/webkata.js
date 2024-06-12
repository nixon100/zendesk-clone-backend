import mongoose from "mongoose";
const webkataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
    },
  
    problemNo: {
      type: Number,
      // required: true,
    },
    mark: {
      type: Number,
      // required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("webkataTask", webkataSchema);
