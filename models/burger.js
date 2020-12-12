//backend burger app
var orm = require("../config/orm.js");

var burger = {
  // Select all burgers from the burgers table using the orm

  selectAll: function (table, cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  // add one burger to the 'eat' list using the orm

  insertOne: function (colName, valOfCol, cb) {
    orm.insertOne("burgers", colName, valOfCol, function (res) {
      cb(res);
    });
  },

  // change the devoured status of a burger from false to true when 'devoured' using the orm

  updateOne: function (valOfCol, condition, cb) {
    orm.updateOne("burgers", valOfCol, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
