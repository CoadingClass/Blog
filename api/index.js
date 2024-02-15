import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, this is a ");
});
const PORT = 300;
app.listen(PORT, () => {
  console.log(`⚙︎ Server is Runnig on prot http://localhost:${PORT}`);
});
