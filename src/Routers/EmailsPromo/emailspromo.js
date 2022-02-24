const express = require('express');
const router = express.Router();
const db=require('../../models');
const emailPromoController=require('../../Controllers/EmailsPromoController/EmailsPromoController');

//getting all the emailPromos
router.get('/view_email_promos',emailPromoController.getAll);

//Creating an emailPromo
router.post('/create_email_promo',emailPromoController.create);

//Getting an emailPromo Data
router.get("/view_email_promo/:id", emailPromoController.findOne);

// Update an emailPromo with id
router.put("/update_email_promo/:id", emailPromoController.update)

// Delete an emailPromo with id
router.delete("/delete_email_promo/:id", emailPromoController.delete);

// Delete all emailPromos
router.delete("/delete_all", emailPromoController.deleteAll);


module.exports=router;

