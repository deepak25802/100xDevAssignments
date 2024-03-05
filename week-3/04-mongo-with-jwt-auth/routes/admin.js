const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../../03-mongo/db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await Admin.findOne({username: username, password: password});
    if(user !== null) {
        res.status(403).send('user alereday exists');
        return;
    }

    await Admin.create({username, password});
    res.send('user created');
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(Admin.findOne({username: username, password: password}) === null) {
        res.send("user does not exists");
        return;
    }

    const signedJWT = jwt.sign({
        username, password
    }, 'SECRET');

    res.send(signedJWT);
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