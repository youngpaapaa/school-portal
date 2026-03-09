const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseCode: { type: String, required: true, unique: true },
    instructor: { type: String, required: true },
    enrolledStudents: { type: [String], default: [] },
    credits: { type: Number, required: true },
    resources: { type: [String], default: [] }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;