import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // we use cookie-parser to access cookie from user browser and also can set cookie
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // backend can access by this origin,in frontend
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //  for taking data in the form of json from frontend
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public")); // pdf or file or image save krne ke liye public me
app.use(cookieParser());

//routes
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export default app;
