const newsRouter = require("./news");
const siteRouter = require("./sites");
const coursesRouter = require("./courses");
const meRouter = require("./me");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/courses", coursesRouter);

  app.use("/me", meRouter);

  app.use("/", siteRouter);

  app.post("/search", (req, res) => {
    res.send(req.body.keyword);
  });
}

module.exports = route;
