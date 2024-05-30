import mongoose from "mongoose";
const ClassSubSchema = new mongoose.Schema(
  {
    frontEndSourceCode: {
      type: String,
      // required: true,
    },
    frontEndDeployedUrl: {
      type: String,
      // required: true,
    },
    frontEndSourceCode2: {
      type: String,
      // required: true,
    },
    frontEndDeployedUrl2: {
      type: String,
      // required: true,
    },
    frontEndSourceCode3: {
      type: String,
      // required: true,
    },
    frontEndDeployedUrl3: {
      type: String,
      // required: true,
    },
    backEndSourceCode: {
      type: String,
      // required: true,
    },
    backEndDeployedUrl: {
      type: String,
      // required: true,
    },
    day: {
      type: String,
      // required: true,
    },
    mark: {
      type: Number,
      // required: true,
    },
    type: {
      type: String,
      // required: true,
    },
    batch: {
      type: String,
      // required: true,
    },


    comments: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ClassSubmission", ClassSubSchema);
