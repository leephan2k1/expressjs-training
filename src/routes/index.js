const newsRouter = require("./news");
const siteRouter = require("./sites");
const coursesRouter = require("./courses");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/courses", coursesRouter);

  app.use("/", siteRouter);

  app.post("/search", (req, res) => {
    console.log(req.body.keyword);
    res.send("");
  });
}

module.exports = route;
