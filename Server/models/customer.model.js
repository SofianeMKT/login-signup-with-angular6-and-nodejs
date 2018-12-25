const mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    image: {
        type: String
    },
    address: {
        type: String
    },
    mobile: {
        type: String
    },
    country: {
        type: String
    },
});

mongoose.model('Customer', customerSchema);