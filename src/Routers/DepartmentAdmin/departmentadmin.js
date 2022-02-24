const express = require('express');
const router = express.Router();
const db=require('../../models');
const departmentAdminController=require('../../Controllers/DepartmentAdminController/DepartmentAdminController');

//getting all the departmentAdmins
router.get('/view_department_admins',departmentAdminController.getAll);

//Creating an departmentAdmin
router.post('/create_department_admin',departmentAdminController.create);

//Getting an departmentAdmin Data
router.get("/view_department_admin/:id", departmentAdminController.findOne);

// Update an departmentAdmin with id
router.put("/update_department_admin/:id", departmentAdminController.update)

// Delete an departmentAdmin with id
router.delete("/delete_department_admin/:id", departmentAdminController.delete);

// Delete all departmentAdmins
router.delete("/delete_all", departmentAdminController.deleteAll);


module.exports=router;

