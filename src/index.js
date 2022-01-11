const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

//middleware handle form submit
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Serving static files in Express
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routing
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  console.log(req.query.keyword);
  res.render("news");
});
app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body.keyword);
  res.send("");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
