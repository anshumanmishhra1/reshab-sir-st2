const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength : 3, //at least add name of length 3 
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    phone: {
        type: String,
        required: true,
        unique : true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);
