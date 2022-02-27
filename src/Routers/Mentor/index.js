const express = require('express');
const router = express.Router();

const mentorRoutes=require('./Mentor');
const mentorProfileRoutes=require('./MentorProfile');

router.use('/',mentorRoutes);

router.use('/profile',mentorProfileRoutes);

module.exports = router;

