module.exports = function() {
  var mongoose = require('mongoose');

  //Define a schema
  var Schema = mongoose.Schema;

  var task = new Schema({
    title: String,
    description: String,
    status: Boolean
  });
  // var meuModelo = mongoose.model('tasks', task);
  return mongoose.models && mongoose.models.tasks
    ? mongoose.models.tasks
    : mongoose.model('tasks', task);
};
