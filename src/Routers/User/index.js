const express = require('express');
const router = express.Router();

const userRoutes=require('./user');
const userProfileRoutes=require('./userProfile');

router.use('/',userRoutes);

router.use('/profile',userProfileRoutes);

module.exports = router;

