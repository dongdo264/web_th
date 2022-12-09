// // let { sequelize, Sequelize } = require('../database_configs/connectDB');
// // const students = require("./student.models")(sequelize, Sequelize);
// // const classes = require("./class.models")(sequelize, Sequelize);

// const db = require("../database_configs/connectDB");

// db.classes.hasMany(db.students, {
//     foreignKey: 'id_class'
// })

// db.students.belongsTo(db.classes, {
//     foreignKey: 'id_class',
//     targetKey: 'id_class'
// });

// db.sync();

// module.exports = {
//     Classes: db.classes,
//     Students: db.students
// }
