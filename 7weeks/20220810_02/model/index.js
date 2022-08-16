const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

// const a = require("../config/config.json");
// const config = a["development"];   <-- 이 두줄을 한줄로 쓴 것이다.
//      "development" : { "host" :  localhost ~~~ }
//      "production" : { "host" : localhost ~~~},
//      const config = a["development"];
//  {
//      "host" : "localhost",
//      "database" : "sesac",
//      "username" : "user",
//      "password" : "1234",
//      "dialect"  : "mysql"
//  }
const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// require("./Visitor") -> ./Visitor.js에서
module.exports = db;



