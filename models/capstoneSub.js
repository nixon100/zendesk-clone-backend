import mongoose from "mongoose";
const SubSchema = new mongoose.Schema(
  {
    frontEndSourceCode: {
      type: String,
      required: true,
    },
    frontEndDeployedUrl: {
      type: String,
      required: true,
    },
    backEndSourceCode: {
      type: String,
      required: true,
    },
    backEndDeployedUrl: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("submission", SubSchema);
