const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://deepakmani115:Dsimran%40145258@cluster0.chcof28.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String, 
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String, 
    password: String,
    courses: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course'
    }],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String, 
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}