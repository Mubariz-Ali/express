var express = require('express');
var router = express.Router();
const {userController} = require('../controller/index');
const studentController = require('../controller/userControllers/studentController');

router.get("/getStudents", studentController.getStudents);
router.post("/createStudents", studentController.createStudents);


module.exports = router;
