import mongoose from "mongoose";
const interviewSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    interview: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    comments: {
        type: String,
        // required: true,
      },
      status: {
        type: String,
        required: true,
      },

    mark: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("interview", interviewSchema);
