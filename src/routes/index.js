const newsRouter = require("./news");
const siteRouter = require("./sites");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/", siteRouter);

  app.post("/search", (req, res) => {
    console.log(req.body.keyword);
    res.send("");
  });
}

module.exports = route;
