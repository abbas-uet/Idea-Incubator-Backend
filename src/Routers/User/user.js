const express = require('express');
const router = express.Router();
const db=require('../../models');
const userController=require('../../Controllers/UserController/UserController');

//getting all the users
router.get('/view_users',userController.getAll);

//Creating an user
router.post('/create_user',userController.create);

//Getting an user Data
router.get("/view_user/:id", userController.findOne);

// Update an user with id
router.put("/update_user/:id", userController.update)

// Delete an user with id
router.delete("/delete_user/:id", userController.delete);

// Delete all users
router.delete("/delete_all", userController.deleteAll);


module.exports=router;

