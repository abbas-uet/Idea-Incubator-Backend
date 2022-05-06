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



// getting all invoices for user
router.get('/view_user_invoices/:id',userController.getAllUserInvoices);

// Getting all the subscription_invoices_limit
router.get('/get_all_user_subscriptions_invoices_limit',userController.getAllUserSubscriptionsInvoicesLast);


router.get('/get_all_user_subscriptions_invoices',userController.getAllUserSubscriptionsInvoices);

router.get('/get_all_user_subscriptions_invoices/:id',userController.getAllUserSubscriptionsInvoicesById);

router.get('/get_all_user_ideas',userController.getUserIdea);

router.get('/get_all_user_ideas_subUsers/:id',userController.getSubUserIdea);


module.exports=router;

