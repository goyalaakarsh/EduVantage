const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    Course_Name: { type: String, required: true },
    Duration_In_Months: { type: Number, required: true },
    Semesters: [{ type: Schema.Types.ObjectId, ref: 'Semester' }], 
    University: { type: Schema.Types.ObjectId, ref: 'University', required: true } 
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
