const express = require('express');
const router = express.Router();
const db=require('../../models');
const industryProfileController=require('../../Controllers/IndustryController/IndustryProfileController');




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




//getting all the industryProfiles
router.get('/view_industryProfiles',industryProfileController.getAll);

//Creating an industryProfile
router.post('/create_industryProfile',upload.single('file'),industryProfileController.create);

//Getting an industryProfile Data
router.get("/view_industryProfile/:id", industryProfileController.findOne);

// Update an industryProfile with id
router.put("/update_industryProfile/:id", industryProfileController.update)

// Delete an industryProfile with id
router.delete("/delete_industryProfile/:id", industryProfileController.delete);

// Delete all industryProfiles
router.delete("/delete_all", industryProfileController.deleteAll);


module.exports=router;

