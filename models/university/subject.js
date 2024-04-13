const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Subject = require('./subject'); 

const courseSchema = new Schema({
    Course_Name: { type: String, required: true },
    Subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }], 
    University: { type: Schema.Types.ObjectId, ref: 'University' } 
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
