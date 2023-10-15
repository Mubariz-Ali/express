const studentService = require('../service/studentService');
const userController = require('./userController');


module.exports = {
    getStudents: async (req, res) => {
      const data = await studentService.getStudents();
      res.send(data);
    },

    createStudents: async (req, res) => {

      
      const { firstName, lastName, email, rollNo, semester, department } = req.body;
  
      try {

          const user = await userController.createUser(req);


          if (!user || !user.id) {
              return res.status(400).json({ error: 'User creation failed' });
          }else{
            res.json({data:user});
          const studentData = {
              userID: user.id,
              rollNo,
              semester,
              department,
          };
          const student = await studentService.createStudents(studentData);


          if (!student || !student.id) {
              return res.status(400).json({ error: 'Student creation failed' });
          }
  
          console.log(student);
          res.send(student);
        }
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
  }
}  
