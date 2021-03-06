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

  //[GET] /courses/edit/:id
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/handle-form
  handleForm(req, res, next) {
    switch(req.body.action){
      case "delete":
          Course.delete({ _id: {$in: req.body.courseIds} })
          .then(() => {
            res.redirect("/me/stored/courses");
          })
          .catch(next);
        break;
      default:
        console.log('something wrong!')
    }
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
    // res.json(req.body);
  }

  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }

  //[DELETE] /courses/force/:id
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }

  //[PATCH] /restore/:id
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
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
