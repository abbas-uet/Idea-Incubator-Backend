const express = require('express');
const router = express.Router();
const db=require('../../models');
const subscriptionController=require('../../Controllers/SubscriptionController/SubscriptionController');

//getting all the subscriptions
router.get('/view_subscriptions',subscriptionController.getAll);

//Creating an subscription
router.post('/create_subscription',subscriptionController.create);

//Getting an subscription Data
router.get("/view_subscription/:id", subscriptionController.findOne);

// Update an subscription with id
router.put("/update_subscription/:id", subscriptionController.update)

// Delete an subscription with id
router.delete("/delete_subscription/:id", subscriptionController.delete);

// Delete all subscriptions
router.delete("/delete_all", subscriptionController.deleteAll);


module.exports=router;

