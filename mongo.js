const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/react-login')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
});

const newSchema = new mongoose.Schema({
    empname: {
        type: String,
        required: true
    },
    empid: {
        type: Number,
        required: true
    },
    empemail: {
        type: String,
        required: true
    },
    nomname: {
        type: String,
        required: true
    },
    nomid: {
        type: Number,
        required: true
    },
    nomemail: {
        type: String,
        required: true
    },
    // nomrel: {
    //     type: String,
    //     required: true
    // },
    what: {
        type: String,
        required: true
    },
    how: {
        type: String,
        required: true
    },
    benefits: {
        type: String,
        required: true
    },
    myphoto: {
      type:String,
    },
    // pdf:{
    //     type:String,
    // },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId
    }
});

const collection = mongoose.model('collection', newSchema);

module.exports = collection;
