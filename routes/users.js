var express = require('express');
var router = express.Router();
const {userController} = require('../controller/index')

router.get("/getUsers", userController.getUsers);
router.post("/createUsers", userController.createUser)


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
