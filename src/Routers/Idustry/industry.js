const express = require('express');
const router = express.Router();
const db=require('../../models');
const IndustryController=require('../../Controllers/IndustryController/IndustryController');

//getting all the Industry
router.get('/view_industry',IndustryController.getAll);

//Creating an Industry
router.post('/create_industry',IndustryController.create);

//Getting an Industry Data
router.get("/view_industry/:id", IndustryController.findOne);

// Update an Industry with id
router.put("/update_industry/:id", IndustryController.update)

// Delete an Industry with id
router.delete("/delete_industry/:id", IndustryController.delete);

// Delete all Industry
router.delete("/delete_all", IndustryController.deleteAll);


module.exports=router;

