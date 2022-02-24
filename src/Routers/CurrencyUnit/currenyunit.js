const express = require('express');
const router = express.Router();
const db=require('../../models');
const currencyUnitController=require('../../Controllers/CurrencyUnitController/CurrencyUnitController');

//getting all the currencyUnits
router.get('/view_currency_units',currencyUnitController.getAll);

//Creating an currencyUnit
router.post('/create_currency_unit',currencyUnitController.create);

//Getting an currencyUnit Data
router.get("/view_currency_unit/:id", currencyUnitController.findOne);

// Update an currencyUnit with id
router.put("/update_currency_unit/:id", currencyUnitController.update)

// Delete an currencyUnit with id
router.delete("/delete_currency_unit/:id", currencyUnitController.delete);

// Delete all currencyUnits
router.delete("/delete_all", currencyUnitController.deleteAll);


module.exports=router;

