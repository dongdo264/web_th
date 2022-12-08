const {DataTypes } = require('sequelize');

module.exports = (db) => {
    const Student = db.define('students', {
        // Model attributes are defined here
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gioitinh: {
            type: DataTypes.STRING,
            defaultValue: 'Male'
        },
        malop: {
            type: DataTypes.STRING,
        }
        }, {
            timestamps: false
        });
    return Student
}

