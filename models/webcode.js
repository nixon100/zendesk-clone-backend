import mongoose from "mongoose";
const WebcodeSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    mark: {
      type: Number,
    },
    websites: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("webcode", WebcodeSchema);
