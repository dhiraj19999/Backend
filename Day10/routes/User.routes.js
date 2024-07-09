const express = require("express");

const userRouter = express.Router();

const { UserModel } = require("../models/User.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) res.send({ msg: "Something went wrong", err: err.message });
      else {
        const user = new UserModel({ name, email, pass: hash });
        await user.save();
        res.send({ msg: "User Registerd" });
      }
    });
  } catch (error) {
    res.send({ msg: "Something went wrong", err: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await UserModel.find({ email: email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, (err, result) => {
        if (result) {
          let token = jwt.sign({ userID: user[0]._id }, "masai");
          res.send({ msg: "loggd in", token: token });
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

module.exports = {
  userRouter,
};
