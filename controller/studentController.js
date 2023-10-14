const studentService = require('../service/studentService');
const userController = require('./userController');

module.exports = {
    getStudents: async (req, res) => {
      const data = await studentService.getStudents();
      res.send(data);
    },
    createStudents: async (req, res) => {
        console.log(req.body);
      const { firstName, lastName, email, rollNo, semester, department } = req.body;
      const user = await userController.createUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      const student = await studentService.createStudents({
        userID: user.id,
        rollNo: Student.rollNo,
        semester: Student.semester,
        department: Student.department,
      });
      console.log(student);
      res.send(student);
      //
    },
  };