const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./configure/db");
const SortMiddleware = require("./app/middlewares/SortMiddleware");

//connect db to express
db.connect();

//middleware handle form submit
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//middleware handle sort data
app.use(SortMiddleware);

//override with method HTTP
app.use(methodOverride("_method"));

//Serving static files in Express
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      //support +1 id render UI
      sum: (a, b) => a + b,
      //support switch icon sort
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : "default";

        const icons = {
          default: "oi oi-elevator",
          desc: "oi oi-sort-descending",
          asc: "oi oi-sort-ascending",
        };
        const switchSortTypes = {
          default: "desc",
          desc: "asc",
          asc: "default",
        };

        const icon = icons[sortType];
        const type = switchSortTypes[sort.type];

        return `<a href="?_sort&column=${field}&type=${type}">
                <span class="${icon}"></span>
              </a>`;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routing
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
