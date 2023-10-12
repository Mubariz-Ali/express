const { userController } = require(".");

module.exports = {
    createUser: async (req, res) => {
        const {firstName, lastName, email} = req.body;
        const {semester, department, rollNo} = req.body;
        // change values with the key value pair
        const user = await userController.createUser({firstName,lastName,email})
        const student = await studentService.createUsers({semester, department, rollNo})
        res.send(data);
    },
}