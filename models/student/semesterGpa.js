const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const semesterGpaSchema = new Schema({
    Semester_Number: { type: Number, required: true },
    GPA: { type: Number, required: true }
});

const SemesterGPA = mongoose.model('SemesterGPA', semesterGpaSchema);
module.exports = SemesterGPA;
