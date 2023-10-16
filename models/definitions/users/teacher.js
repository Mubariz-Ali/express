const { INTEGER, STRING } = require('sequelize');
let sequelize = require('../../../common/dbConnection');
const teacher = sequelize.define('teacher', {
    id:{
        primaryKey:true,
        autoIncrement:true,
        type: INTEGER,
    },
    department:{
        allowNull:false,
        type:STRING
    },
    section:{
        allowNull:false,
        type:STRING
    }
},{
    timestamps:true,
    paranoid:true,
    sequelize,
    modelName: "teacher"
})
module.exports = teacher;