const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require('../db')
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    .then((admin) => {
        res.status(201).json({ msg: 'Admin Created'});
      })
    .catch((error) => {
        res.status(500).json({ msg: 'Error Creating admin', error: error.message });
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    Course.create({
        title,
        description,
        imageLink,
        price
    })
    .then((course) => {
        res.status(201).json({ msg: 'Course Created' });
      })
    .catch((error) => {
        res.status(500).json({ msg: 'Error Creating course', error: error.message });
    });
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then((courses) => {
        res.status(200).json(courses);
      })
    .catch((error) => {
        res.status(500).json({ msg: 'Error getting courses', error: error.message });
    });
});

module.exports = router;