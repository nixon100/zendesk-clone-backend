import mongoose from "mongoose";
const CapstoneSchema = new mongoose.Schema(
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
    description : {
      type: String,
      required: true,
    },
    frontend : {
      type: String,
      required: true,
    },
    backend : {
      type: String,
      required: true,
    },
    database : {
      type: String,
      required: true,
    },
    mark : {
      type: Number,
      required: true,
    },
    websites: [
      {
        url: {
          type: String,
          required: true,
        }
       
      }
    ],
 
  },
  { timestamps: true }
);

export default mongoose.model("Capstone", CapstoneSchema);
