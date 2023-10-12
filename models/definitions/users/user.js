const { INTEGER, STRING } = require('sequelize');
let sequelize = require('../../../common/dbConnection');
const user = sequelize.define('user', {
    id:{
        primaryKey:true,
        autoIncrement:true,
        type: INTEGER,
    },
    firstName:{
        allowNull:true,
        type:STRING
    },
    lastName:{
        allowNull:true,
        type:STRING
    },
    email:{
        unique:true,
        allowNull:false,
        type:STRING,
        validate:{isEmail:true}
    },
},{
    timestamps:true,
    paranoid:true,
    sequelize,
    modelName: "users"
})
module.exports = user;