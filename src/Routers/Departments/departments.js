const express = require('express');
const router = express.Router();
const db=require('../../models');
const departmentController=require('../../Controllers/DepartmentController/DepartmentController');
const adminController = require("../../Controllers/AdminController/AdminController");

//getting all the departments
router.get('/view_departments',departmentController.getAll);

//Creating an departments
router.post('/create_department',departmentController.create);

//Getting an departments Data
router.get("/view_department/:id", departmentController.findOne);

// Update an departments with id
router.put("/update_department/:id", departmentController.update)

// Delete an departments with id
router.delete("/delete_department/:id", departmentController.delete);

// Delete all departments
router.delete("/delete_all", departmentController.deleteAll);


//get the Last id of the departments there
router.get('/getLastId',departmentController.getLastId );

//getting the Department Associated with admin
router.get("/view_department_admins/:id", departmentController.getOneDepartmentAdmin);


module.exports=router;

