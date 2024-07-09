import UserModel from "../models/User.models.js";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, pass, role } = req.body;
  try {
    const isuser = await UserModel.find({ email: email });
    if (isuser.length > 0) {
      res.send({ msg: "user already registerd" });
    } else {
      bcrypt.hash(pass, 5, async (err, hash) => {
        if (err) res.send({ msg: "Something went wrong", err: err.message });
        else {
          const user = new UserModel({ name, email, pass: hash, role });
          await user.save();
          res.send({ msg: "User Registerd" });
        }
      });
    }
  } catch (error) {
    res.send({ msg: "Something went wrong", err: error.message });
  }
});

userRouter.get("/logout", async (req, res) => {
  // Clear the authentication cookie
  res.clearCookie("token");
  res.send("Logged out! Authentication cookie has been cleared.");
});
userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await UserModel.find({ email: email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, (err, result) => {
        if (result) {
          let token = jwt.sign({ userID: user[0]._id }, "masai");
          res.cookie("token", token);
          res.send({ msg: "loggd in" });
        } else {
          res.send({ msg: "Wrong Credntilas" });
        }
      });
    } else {
      res.send({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

export default userRouter;
