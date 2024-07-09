const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/User.routes");
const { noteRouter } = require("./routes/Note.routes");
const { authenticate } = require("./middelwares/authinticate.middelware");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});
app.use("/users", userRouter);
app.use(authenticate);
app.use("/notes", noteRouter);

app.listen(4900, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log("cannot connected to db");
    console.log(error);
  }
  console.log("server runing at 4800");
});
