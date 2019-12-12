var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var workoutRoutineSchema = new Schema({
	'name' : String,
	'exercises' : Array
});

module.exports = mongoose.model('workoutRoutine', workoutRoutineSchema);
