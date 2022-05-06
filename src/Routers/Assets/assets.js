const express = require('express');
const router = express.Router();
const db=require('../../models');
const AssetsController=require('../../Controllers/AssetController/AssetController');

//getting all the assets
router.get('/view_assets',AssetsController.getAll);

//Creating an asset
router.post('/create_asset',AssetsController.create);

//Getting an asset Data
router.get("/view_asset/:id", AssetsController.findOne);

// Update an asset with id
router.put("/update_asset/:id", AssetsController.update)

// Delete an asset with id
router.delete("/delete_asset/:id", AssetsController.delete);

// Delete all assets
router.delete("/delete_all", AssetsController.deleteAll);






module.exports=router;

