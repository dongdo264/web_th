let db = require('../configs/connectDB');
const students = require("./student")(db);
const classes = require("./class")(db);

classes.hasMany(students, {
    foreignKey: 'malop'
})
students.belongsTo(classes, {
    foreignKey: 'malop',
    targetKey: 'malop'
});

db.sync();
module.exports = {
    Class: classes,
    Students: students
}




