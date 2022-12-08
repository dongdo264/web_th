var express = require('express');
var router = express.Router();
let studentController = require("../controllers/student.controller");

router.get("/students", studentController.getAllStudent);
router.get("/student/:id", studentController.getStudentById)

module.exports = router;