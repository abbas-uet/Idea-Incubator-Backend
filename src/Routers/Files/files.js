const express = require('express');
const router = express.Router();
const db=require('../../models');
const Files=require('../../Controllers/FilesController/FilesConstorller');

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



//getting all the promoCodes
router.get('/get_all_files',Files.getAllFiles);

//Creating an promoCode
router.post('/create_file',upload.single('file'),Files.create);

//Getting an promoCode Data
router.get("/view_file/:id", Files.findOne);

// Update an promoCode with id
router.put("/update_file/:id", Files.update)

// Delete an promoCode with id
router.delete("/delete_file/:id", Files.delete);

// Delete all promoCodes
router.delete("/delete_all", Files.deleteAll);


module.exports=router;

