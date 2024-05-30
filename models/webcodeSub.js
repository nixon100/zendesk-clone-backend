import mongoose from "mongoose";
const webSubSchema = new mongoose.Schema(
  {
    frontEndSourceCode: {
      type: String,
      required: true,
    },
    frontEndDeployedUrl: {
      type: String,
      required: true,
    },

    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("webSub", webSubSchema);
