import UserModel from "../models/User.models.js";

const isAdmin = async (req, res, next) => {
  const userid = req.body.user;

  const user = await UserModel.findById(userid);

  if (user.role == "admin") {
    next();
  } else {
    res.send({ msg: "you are not admin,unathorised" });
  }
};

export default isAdmin;
