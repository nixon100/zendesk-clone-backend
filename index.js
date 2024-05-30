import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import capstoneRoute from "./routes/Capstone.js"
import webcodeRoute from "./routes/webcode.js"
import tasklist from "./routes/task.js"
import classRoute from "./routes/class.js"
import interviewRoute from "./routes/interview.js"

const app = express();
dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

// MIDDLEWARES
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", classRoute);
app.use("/api/capstone",capstoneRoute)
app.use("/api/webcode",webcodeRoute)
app.use("/api/task",tasklist)
app.use("/api/class",classRoute)
app.use("/api/interview",interviewRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(process.env.PORT, () => {
    connect();
    console.log("Connected to backend.");
  });