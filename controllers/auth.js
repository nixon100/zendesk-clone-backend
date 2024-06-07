import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";
import Cookies from "js-cookie";
// import cookieParser from "cookie-parser"
// import express from "express";
// let app = express() 
// app.use(cookieParser()); 
 

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  // Generate a random session ID

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res.cookie('access_token', token, {
      httpOnly: true,
      // maxAge: 31536000000 // 1 year
    })
      .status(200)
      .json({ details: { ...otherDetails }, token });
    // res.status(200).json({ ...otherDetails, token });

    // Cookies.set("access_token", token, { expires: 90 });
    // const tokenn = Cookies.get("access_token");
    // res.cookie("userData", token)
    // .status(200).json({ ...otherDetails, token});
  } catch (err) {
    next(err);
  }
};



export const updateAuth = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const newPasswordHash = bcrypt.hashSync(req.body.password, salt);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { password: newPasswordHash } },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const resetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:3000/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nixon6637@gmail.com",
        pass: "fcgr jwte qgpn uqaa",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "vipnixon888@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
};

export const resetPassword2 = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = process.env.JWT;
  console.log(id, token);
  try {
    const verify = jwt.verify(token, secret);

    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    res.json("success");
    // res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
};

export const resetPassword3 = async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = process.env.JWT + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    console.log("not verified");
    // res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
};
export const logout = (req,res)=>{
  res.clearCookie('access_token'); 
res.send('user logout successfully');
}
