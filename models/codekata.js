import mongoose from "mongoose";
const codekataSchema = new mongoose.Schema(
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

export default mongoose.model("codekataTask", codekataSchema);
