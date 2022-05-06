const express = require('express');
const router = express.Router();
const db=require('../../models');
const IdeaController=require('../../Controllers/IdeaController/IdeaController');

//getting all the ideas
router.get('/view_ideas',IdeaController.getAll);

//Creating an idea
router.post('/create_idea',IdeaController.create);

//Getting an idea Data
router.get("/view_idea/:id", IdeaController.findOne);

// Update an idea with id
router.put("/update_idea/:id", IdeaController.update)

// Delete an idea with id
router.delete("/delete_idea/:id", IdeaController.delete);

// Delete all ideas
router.delete("/delete_all", IdeaController.deleteAll);


// Delete all ideas
router.get("/get_all_idea_users", IdeaController.getAllIdeasUser);


module.exports=router;

