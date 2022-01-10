const express = require("express");

const app = express();
const port = 3000;
console.log("hihi");

app.get("/", (req, res) => {
  res.send("hihi");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
