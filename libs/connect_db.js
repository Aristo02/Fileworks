var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var db;

module.exports = function() {
  mongoose.connect('mongodb://localhost/fileworks');

  mongoose.Promise = global.Promise;
  //Get the default connection
  var db = mongoose.connection;
  return db;
};
