const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const School = require('./school'); 

const universitySchema = new Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Logo: { type: String },
    // Address: {
    //     Address_Line_1: { type: String, required: true },
    //     Address_Line_2: { type: String },
    //     City: { type: String, required: true },
    //     State_Province: { type: String, required: true },
    //     Country: { type: String, required: true },
    //     Postal_Code: { type: String, required: true }
    // },
    // Contact: {
    //     Email: { type: String, required: true },
    //     Phone_Number: { type: String, required: true }
    // },
    // Schools: [{ type: Schema.Types.ObjectId, ref: 'School' }] 
});

const University = mongoose.model('University', universitySchema);
module.exports = University;