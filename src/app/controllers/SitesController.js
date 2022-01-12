const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class SitesController {
  //[GET] /
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SitesController();
