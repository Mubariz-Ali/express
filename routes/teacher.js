var express = require('express');
var router = express.Router();
// const {userController} = require('../controller/index');
const teacherController = require('../controller/index');
// const teacherController = require('../controller/userControllers/teacherController');

router.get("/getTeachers", teacherController.getTeachers);
router.post("/createTeachers", teacherController.createTeachers);


module.exports = router;
