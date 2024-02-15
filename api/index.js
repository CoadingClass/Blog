import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DataBas is Connected");
  })
  .catch((error) => {
    console.log(`ERROR ======>>>  ${error}`);
  });

app.get("/", (req, res) => {
  res.send("Hello, this is a ");
});
const PORT = 300;
app.listen(PORT, () => {
  console.log(`⚙︎ Server is Runnig on prot http://localhost:${PORT}`);
});
