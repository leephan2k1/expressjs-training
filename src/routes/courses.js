const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

router.get("/:slug", coursesController.index);

module.exports = router;
