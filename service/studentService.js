const {models} = require('../models/definitions');

module.exports = {
    getStudents: async () => {
        const result = await models.student.findAll();
        return result;
    },
    createStudents: async(data) => {
        console.log(data);
        const result = await models.student.create(data)
        return result;
    }
}