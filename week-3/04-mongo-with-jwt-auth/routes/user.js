const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const { User, Course } = require("../../03-mongo/db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.findOne({username: username, password: password});
    if(user !== null) {
        res.status(403).send('user alereday exists');
        return;
    }

    await User.create({username, password});
    res.send('user created');
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(User.findOne({username: username, password: password}) === null) {
        res.send("user does not exists");
        return;
    }

    const signedJWT = jwt.sign({
        username, password
    }, 'SECRET');

    res.send(signedJWT);
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.send(courses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const id = req.params.courseId;

    await User.updateOne({
        username: username
    }, {
        '$push': {
            courses: id
        }
    });
    res.send('course added to the user');
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({username: username});
    const ans = await Course.find({
        _id: {
            "$in": user.courses
        }
    });

    res.send(ans);
});

module.exports = router