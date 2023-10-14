const { INTEGER, STRING } = require('sequelize');
let sequelize = require('../../../common/dbConnection');
const student = sequelize.define('student', {
    id:{
        primaryKey:true,
        autoIncrement:true,
        type: INTEGER,
    },
    rollNo:{
        allowNull:false,
        type:STRING
    },
    department:{
        allowNull:false,
        type:STRING
    },
    semester:{
        allowNull:false,
        type:INTEGER
    }
},{
    timestamps:true,
    paranoid:true,
    sequelize,
    modelName: "student"
})
module.exports = student;