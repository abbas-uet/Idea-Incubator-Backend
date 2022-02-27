const express = require('express');
const router = express.Router();
const db=require('../../models');
const industryServicesController=require('../../Controllers/IndustryController/IndustrySevicesController');






//getting all the industryServicess
router.get('/view_industryServices',industryServicesController.getAll);

//Creating an industryServices
router.post('/create_industryServices',industryServicesController.create);

//Getting an industryServices Data
router.get("/view_industryServices/:id", industryServicesController.findOne);

// Update an industryServices with id
router.put("/update_industryServices/:id", industryServicesController.update)

// Delete an industryServices with id
router.delete("/delete_industryServices/:id", industryServicesController.delete);

// Delete all industryServicess
router.delete("/delete_all", industryServicesController.deleteAll);


module.exports=router;

