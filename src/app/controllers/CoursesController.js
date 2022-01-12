const Course = require("../models/Courses");
const urlSlug = require("url-slug");
const { customAlphabet } = require("nanoid");
const { mongooseToObject } = require("../../utils/mongoose");

class CoursesController {
  //[GET] /courses/:slug
  index(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/course", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/create
  store(req, res) {
    // res.json(req.body);
    const formData = req.body;
    let slugName = urlSlug(formData.name);

    //handle same slug
    Course.find({ slug: slugName }, function (err, docs) {
      if (docs.length) {
        const nanoid = customAlphabet(slugName, 2);
        slugName += "-" + nanoid();
      }

      formData.slug = slugName;
      const course = new Course(formData);
      course
        .save()
        .then(() => {
          return res.redirect("/");
        })
        .catch((error) => {});
    });
  }
}

module.exports = new CoursesController();
