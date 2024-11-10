require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("aku di sini");
});

app.listen(PORT, () => {
  console.log(`aku cinta ${PORT}`);
});
