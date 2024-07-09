import UserModel from "../models/User.models.js";
import express from "express";

const adminRouter = express.Router();

adminRouter.get("/allusers", async (req, res) => {
  let users = await UserModel.find({});

  res.send(users);
});

export default adminRouter;
