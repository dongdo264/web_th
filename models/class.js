const {DataTypes } = require('sequelize');
module.exports = (db) => {
    const Class = db.define('classes', {
        // Model attributes are defined here
        malop: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
        }, {
            timestamps: false
        });
    return Class;
}
