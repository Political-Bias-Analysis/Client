const dbConfig = require("../config/db.config.js");
require('pg').defaults.parseInt8 = true

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.results = require("./results.model.js")(sequelize, Sequelize);
// db.voters = require("./voters.model.js")(sequelize, Sequelize);
db.votersView = require("./votersView.model.js")(sequelize, Sequelize);
db.articles = require("./articles.model.js")(sequelize, Sequelize);
module.exports = db;