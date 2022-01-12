const Course = require("../models/Courses");
const { mongooseToObject } = require("../../utils/mongoose");

class CoursesController {
  //[GET] /courses/:slug
  index(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
    // console.log(req.params.slug);
    // res.send("COURSE DETAILS - " + req.params.slug);
  }
}

module.exports = new CoursesController();
