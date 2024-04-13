const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const University = require('./university'); 
const SemesterGPA = require('./semesterGpa'); 

const studentSchema = new Schema({
    University_Student_Email: { type: String, required: true }, 
    Enrollment_Number: { type: String, required: true },
    Course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    Batch: { type: String, required: true },
    University: { type: Schema.Types.ObjectId, ref: 'University', required: true }, 
    Personal_Info: {
        Name: { type: String, required: true },
        Age: { type: Number },
        Gender: { type: String, enum: ['Male', 'Female', 'Other'] }
    },
    Contact_Info: {
        Phone_Number: { type: String },
        Address: {
            Street: { type: String },
            City: { type: String },
            State: { type: String },
            Zip_Code: { type: String }
        }
    },
    Academic_Info: {
        Cumulative_GPA: { type: Number },
        Semester_GPA: [{ type: Schema.Types.ObjectId, ref: 'SemesterGPA' }] 
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
