import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  //const token = req.headers.authorization;
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, "masai", (err, decoded) => {
      if (decoded) {
        req.body.user = decoded.userID; // setting user property in req object
        next();
      } else {
        res.send({ msg: "please login" });
      }
    });
  } else {
    res.send({ msg: "plese login" });
  }
};

export default authenticate;
