// const {DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define('classes', {
        // Model attributes are defined here
        id_class: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return Class;
}
