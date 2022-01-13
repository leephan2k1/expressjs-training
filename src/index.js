const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./configure/db");

//connect db to express
db.connect();

//middleware handle form submit
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//override with method HTTP
app.use(methodOverride("_method"));

//Serving static files in Express
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  engine({ extname: ".hbs", helpers: { sum: (a, b) => a + b } })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routing
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
