const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = require('./course'); 

const schoolSchema = new Schema({
    School_Name: { type: String, required: true },
    Courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }], 
    University: { type: Schema.Types.ObjectId, ref: 'University' } 
});

const School = mongoose.model('School', schoolSchema);
module.exports = School;
