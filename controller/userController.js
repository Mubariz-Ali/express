const userService = require("../service/userService");

module.exports = {
    getUsers: async (req, res) => {
        const data = await userService.getUsers()
        res.send(data);
    },
    createUser: async (req, res) => {
        const data = await userService.createUsers(req.body)
        res.send(data);
    },
}