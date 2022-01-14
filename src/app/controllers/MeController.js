const Courses = require("../../app/models/Courses");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class SitesController {

  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Courses.countDocumentsDeleted()
      .then(number => {
        console.log(number)
      })
      .catch(next)

    Courses.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(function (err) {});
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
