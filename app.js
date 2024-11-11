if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("aku di sini uhuy");
});

app.listen(PORT, () => {
  console.log(`Aku tresno ${PORT}`);
=======
  res.send("aku di sini");
});

app.listen(PORT, () => {
  console.log(`Aku tresno ${PORT} uhuy ahay 8`);
>>>>>>> de96a903152857928be5ba876b4145ee91dc40d2
});
