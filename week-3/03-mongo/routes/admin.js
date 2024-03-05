const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await Admin.findOne({username: username, password: password});
    if(user) {
        console.log(user);
        res.send('admin already exists');
        return;
    }

    await Admin.create({username: username, password: password});
    res.send('admin created');
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const price = req.body.price;

    Course.create({title: title, price: price});
    res.send('course created');
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.send(courses); 
});

module.exports = router;