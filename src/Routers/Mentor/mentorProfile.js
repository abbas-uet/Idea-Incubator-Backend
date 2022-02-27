const express = require('express');
const router = express.Router();
const db=require('../../models');
const mentorProfileController=require('../../Controllers/MentorController/MentorProfileController');




const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({

    destination: (req, file, callBack) => {
        callBack(null, './public/files/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now()+ '_' + file.originalname)
    }
});

const upload = multer({
    storage: storage
});




//getting all the mentorProfiles
router.get('/view_mentorProfiles',mentorProfileController.getAll);

//Creating an mentorProfile
router.post('/create_mentorProfile',upload.single('file'),mentorProfileController.create);

//Getting an mentorProfile Data
router.get("/view_mentorProfile/:id", mentorProfileController.findOne);

// Update an mentorProfile with id
router.put("/update_mentorProfile/:id", mentorProfileController.update)

// Delete an mentorProfile with id
router.delete("/delete_mentorProfile/:id", mentorProfileController.delete);

// Delete all mentorProfiles
router.delete("/delete_all", mentorProfileController.deleteAll);


module.exports=router;

