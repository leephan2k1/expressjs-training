const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

router.get("/create", coursesController.create);

router.post("/store", coursesController.store);
router.get("/edit/:id", coursesController.edit);

router.put("/:id", coursesController.update);
router.patch("/restore/:id", coursesController.restore);

router.delete("/:id", coursesController.delete);
router.delete("/force/:id", coursesController.forceDelete);

router.get("/:slug", coursesController.index);

module.exports = router;
