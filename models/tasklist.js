import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema(
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

    status: {
      type: String,
      required: true,
    },

    mark: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tasklist", TaskSchema);
