const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming User model exists
        required: true
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming User model exists
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    attachments: [String], // Array of attachment URLs
}, {
    timestamps: true // Automatically create createdAt and updatedAt fields
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;