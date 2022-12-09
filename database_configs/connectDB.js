const dbConfig = require("../database_configs/db.config");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.students = require("../models/student.models")(sequelize, Sequelize);
db.classes = require("../models/class.models")(sequelize, Sequelize);

db.classes.hasMany(db.students, {
  foreignKey: 'id_class'
})

db.students.belongsTo(db.classes, {
  foreignKey: 'id_class',
  targetKey: 'id_class'
});

sequelize.sync();
module.exports = db;