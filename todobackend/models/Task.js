//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    text: {
        type: String,
    },
   
},{timestamps: true});

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;