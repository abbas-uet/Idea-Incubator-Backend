const express = require('express');
const router = express.Router();
const db=require('../../models');
const promoCodeController=require('../../Controllers/PromoCodeController/PromoCodeController');

//getting all the promoCodes
router.get('/view_promo_codes',promoCodeController.getAll);

//Creating an promoCode
router.post('/create_promo_code',promoCodeController.create);

//Getting an promoCode Data
router.get("/view_promo_code/:id", promoCodeController.findOne);

// Update an promoCode with id
router.put("/update_promo_code/:id", promoCodeController.update)

// Delete an promoCode with id
router.delete("/delete_promo_code/:id", promoCodeController.delete);

// Delete all promoCodes
router.delete("/delete_all", promoCodeController.deleteAll);


module.exports=router;

