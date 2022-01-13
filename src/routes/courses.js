const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.get("/edit/:id", coursesController.edit);
router.put("/:id", coursesController.update);
router.get("/:slug", coursesController.index);

module.exports = router;
