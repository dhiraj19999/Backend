import express from "express";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import connection from "./db.js";
import noteRouter from "./routes/note.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authenticate from "./middlewares/auth.middlewares.js";
import isAdmin from "./middlewares/isadmin.middleware.js";
const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome from authentication");
});

app.get("/coo", (req, res) => {
  const myCookie = req.cookies.token;
  res.send(myCookie);
});

app.use("/user", userRouter);
app.use("/admin", authenticate, isAdmin, adminRouter);
app.use("/notes", authenticate, noteRouter);
app.listen(4900, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log("cannot connected to db");
    console.log(error);
  }
  console.log("server runing at 4900");
});
