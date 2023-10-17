const {models} = require('../models/definitions');

module.exports = {
    getTeachers: async () => {
        const result = await models.teacher.findAll();
        return result;
    },
    createTeachers: async(data) => {
        const result = await models.teacher.create(data)
        return result;
    }
}