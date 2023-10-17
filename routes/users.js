var express = require('express');
var router = express.Router();
const {userController} = require('../controller/index')

router.get("/getUsers", userController.getUsers);
router.post("/createUsers", userController.createUser)

module.exports = router;
