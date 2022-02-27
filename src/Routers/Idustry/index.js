const express = require('express');
const router = express.Router();

const industryRoutes=require('./industry');
const industryProfileRoutes=require('./industryProfile');
const industryServices=require('./industryService');

router.use('/',industryRoutes);

router.use('/profile',industryProfileRoutes);

router.use('/services',industryServices);

module.exports = router;

