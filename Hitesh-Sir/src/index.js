import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({ path: "./env" }); // dotenv we use becuse envoirment varible sabhi jagh availbale ho

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("Mongodb connection failed !!", err);
  });
