const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admissionNumber: { type: String, required: true, unique: true },
    grades: [{
        subject: { type: String, required: true },
        score: { type: Number, required: true }
    }],
    attendance: [{
        date: { type: Date, required: true },
        status: { type: String, enum: ['Present', 'Absent'], required: true }
    }],
    enrolledCourses: [{ type: String }]
});

module.exports = mongoose.model('Student', studentSchema);