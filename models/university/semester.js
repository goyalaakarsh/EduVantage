const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Subject = require('./subject'); 

const semesterSchema = new Schema({
    Semester_Number: { type: Number, required: true },
    Subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }] 
});

const Semester = mongoose.model('Semester', semesterSchema);
module.exports = Semester;
