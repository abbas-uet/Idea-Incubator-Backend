const express = require('express');
const router = express.Router();
const db=require('../../models');
const zoomController=require('../../Controllers/ZoomController/ZoomController');

//getting all the users
router.get('/createMeetingScheduled',zoomController.createMeetingScheduled);

router.get('/createMeeting',zoomController.createMeeting);


//For Webinars
router.get('/createWebinarScheduled',zoomController.createWebinarScheduled);

router.get('/createWebinar',zoomController.createWebinar);

module.exports=router;

