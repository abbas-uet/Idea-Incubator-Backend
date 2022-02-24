const express = require('express');
const router = express.Router();
const db=require('../../models');
const superAdminController=require('../../Controllers/SuperAdminConstroller/SuperAdminController');

//getting all the admins
router.get('/view_super_admins',superAdminController.getAll);

//Creating an Admin
router.post('/create_super_admin',superAdminController.create);

//Getting an Admin Data
router.get("/view_super_admin/:id", superAdminController.findOne);

// Update an Admin with id
router.put("/update_super_admin/:id", superAdminController.update)

// Delete an Admin with id
router.delete("/delete_super_admin/:id", superAdminController.delete);

// Delete all Admins
router.delete("/delete_super_all", superAdminController.deleteAll);


module.exports=router;

