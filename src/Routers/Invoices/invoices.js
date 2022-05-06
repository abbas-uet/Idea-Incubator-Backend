const express = require('express');
const router = express.Router();
const db=require('../../models');
const invoiceController=require('../../Controllers/InvoiceController/InvoiceController');

//getting all the invoices
router.get('/view_invoices',invoiceController.getAll);

//Creating an invoice
router.post('/create_invoice',invoiceController.create);

//Getting an invoice Data
router.get("/view_invoice/:id", invoiceController.findOne);

// Update an invoice with id
router.put("/update_invoice/:id", invoiceController.update)

// Delete an invoice with id
router.delete("/delete_invoice/:id", invoiceController.delete);

// Delete all invoices
router.delete("/delete_all", invoiceController.deleteAll);


// Delete all invoices
router.get("/get_all_invoice_users", invoiceController.getAllInvoicesUser);

module.exports=router;

