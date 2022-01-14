const Courses = require("../../app/models/Courses");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class SitesController {

  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([ Courses.find({}), Courses.countDocumentsDeleted()])
      .then(([courses, count]) => {
        res.render("me/stored-courses", {
          deletedCount: count,
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next)
  }

  trashCourses(req, res, next) {
    Courses.findDeleted({})
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(function (err) {});
  }
}

module.exports = new SitesController();
