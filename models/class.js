import mongoose from "mongoose";
const ClassSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    date_and_time: {
      type: String,
      // required: true,
    },
    content: {
      type: String,
      // required: true,
    },
    pre_read: {
      type: String,
      // required: true,
    },
    taskURL: {
      type: String,
      // required: true,
    },
    frontEndSourceCode: {
      type: String,
     
    }
   
  },
  { timestamps: true }
);

export default mongoose.model("classList", ClassSchema);
