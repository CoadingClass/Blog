import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DataBas is Connected");
  })
  .catch((error) => {
    console.log(`ERROR ======>>>  ${error}`);
  });

const PORT = 300;
app.listen(PORT, () => {
  console.log(`⚙︎ Server is Runnig on prot http://localhost:${PORT}`);
});

app.use("/api/user", userRoute);
app.use("/api/user", authRoute);
