const studentService = require('../service/studentService');
const userController = require('./userController');

module.exports = {
    getStudents: async (req, res) => {
      const data = await studentService.getStudents();
      res.send(data);
    },
    createStudents: async (req, res) => {
      // console.log(req.body); // Check the request body data
  
      const { firstName, lastName, email, rollNo, semester, department } = req.body;
  
      try {
          // Create a user first
          const user = await userController.createUser(req);
  
          // Check if the user creation was successful
          if (!user || !user.id) {
              return res.status(400).json({ error: 'User creation failed' });
          }else{
            return res.json({data:user});
          }
  
          // Create a student record linked to the user
          const studentData = {
              userID: user.id,
              rollNo,
              semester,
              department,
          };
          const student = await studentService.createStudents(studentData);
  
          // Check if the student creation was successful
          if (!student || !student.id) {
              return res.status(400).json({ error: 'Student creation failed' });
          }
  
          console.log(student);
          res.send(student);
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
  }
}  
