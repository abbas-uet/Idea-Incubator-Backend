const express = require('express');
const router = express.Router();
const db=require('../../models');
const TalentController=require('../../Controllers/TalentController/TalentController');

//getting all the Talent
router.get('/view_talents',TalentController.getAll);

//Creating an Talent
router.post('/create_talent',TalentController.create);

//Getting an Talent Data
router.get("/view_talent/:id", TalentController.findOne);

// Update an Talent with id
router.put("/update_talent/:id", TalentController.update)

// Delete an Talent with id
router.delete("/delete_talent/:id", TalentController.delete);

// Delete all Talent
router.delete("/delete_all", TalentController.deleteAll);


module.exports=router;
