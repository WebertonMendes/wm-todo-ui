const express = require("express");
const { resolve } = require("path");
const path = require("path");
const app = express();

app.use("/", express.static(resolve(__dirname, "./dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(process.env.PORT || 3000, (err) => {
  err ? console.log("err", err) : console.log("Tudo Funcionando!");
});
