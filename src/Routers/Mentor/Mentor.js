const express = require('express');
const router = express.Router();
const db=require('../../models');
const MentorController=require('../../Controllers/MentorController/MentorController');
const userController = require("../../Controllers/UserController/UserController");

//getting all the Mentor
router.get('/view_mentor',MentorController.getAll);

//Creating an Mentor
router.post('/create_mentor',MentorController.create);

//Getting an Mentor Data
router.get("/view_mentor/:id", MentorController.findOne);

// Update an Mentor with id
router.put("/update_mentor/:id", MentorController.update)

// Delete an Mentor with id
router.delete("/delete_mentor/:id", MentorController.delete);

// Delete all Mentor
router.delete("/delete_all", MentorController.deleteAll);



//
router.get('/view_mentor_profiles',MentorController.getAllMentors);


module.exports=router;

