// const {Sequelize } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('students', {
        // Model attributes are defined here
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        birth: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            defaultValue: 'Male'
        },
        id_class: {
            type: Sequelize.STRING,
        }
    }, {
        timestamps: false
    });
    return Student;
}

