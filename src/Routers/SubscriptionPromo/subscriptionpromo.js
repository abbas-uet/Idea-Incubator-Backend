const express = require('express');
const router = express.Router();
const db=require('../../models');
const subscriptionPromoController=require('../../Controllers/SubscriptionPromoController/SubscriptionPromoController');

//getting all the subscriptionPromos
router.get('/view_subscription_promos',subscriptionPromoController.getAll);

//Creating an subscriptionPromo
router.post('/create_subscription_promo',subscriptionPromoController.create);

//Getting an subscriptionPromo Data
router.get("/view_subscription_promo/:id", subscriptionPromoController.findOne);

// Update an subscriptionPromo with id
router.put("/update_subscription_promo/:id", subscriptionPromoController.update)

// Delete an subscriptionPromo with id
router.delete("/delete_subscription_promo/:id", subscriptionPromoController.delete);

// Delete all subscriptionPromos
router.delete("/delete_all", subscriptionPromoController.deleteAll);


module.exports=router;

