const express = require('express');
const router = express.Router();
const db=require('../../models');
const userProfileController=require('../../Controllers/UserController/UserProfileController');




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




//getting all the userProfiles
router.get('/view_userProfiles',userProfileController.getAll);

//Creating an userProfile
router.post('/create_userProfile',upload.single('file'),userProfileController.create);

//Getting an userProfile Data
router.get("/view_userProfile/:id", userProfileController.findOne);

// Update an userProfile with id
router.put("/update_userProfile/:id", userProfileController.update)

// Delete an userProfile with id
router.delete("/delete_userProfile/:id", userProfileController.delete);

// Delete all userProfiles
router.delete("/delete_all", userProfileController.deleteAll);


module.exports=router;

