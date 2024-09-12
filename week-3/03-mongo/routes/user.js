const { Router } = require("express");
const {User, Course} = require('../db')
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then((user) => {
        res.status(201).json({ msg: 'User Created'});
      })
    .catch((error) => {
        res.status(500).json({ msg: 'Error Creating admin', error: error.message });
    });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
    .then((courses) => {
        res.status(200).json(courses);
      })
    .catch((error) => {
        res.status(500).json({ msg: 'Error getting courses', error: error.message });
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            coursesPurchased: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const courses = await User.findOne({
        username: req.headers.username
    }).select('coursesPurchased');

    res.json({
        courses: courses
    })
});

module.exports = router