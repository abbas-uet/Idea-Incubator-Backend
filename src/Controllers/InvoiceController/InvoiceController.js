const db = require("../../models");
const Invoice = db.Invoice;
const Op = db.Sequelize.Op;
// Create and Save a new Invoice
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Invoice
    const invoice = {
        createdon: req.body.createdon,
        duedate: req.body.duedate,
        paymentMethod:req.body.paymentMethod,
        ammount:req.body.ammount,
        status:req.body.status,
        userId:req.body.userId
    };
    // Save Invoice in the database
    Invoice.create(invoice)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Invoices."
            });
        });
};
// Retrieve all Invoices from the database.
exports.getAll = (req, res) => {
    Invoice.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Invoices."
            });
        });
};
// Find a single Invoice with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Invoice.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Invoice with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Invoice with id=" + id
            });
        });
};
// Update an Invoice by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Invoice.update(req.body, {
        where: { invoiceid: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Invoice was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Invoice with id=${id}. Maybe Invoice was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Invoice with id=" + id
            });
        });
};
// Delete an Invoice with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Invoice.destroy({
        where: { invoiceid: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Invoice was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Invoice with id=${id}. Maybe Invoice was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Invoice with id=" + id
            });
        });
};
// Delete all Invoices from the database.
exports.deleteAll = (req, res) => {
    Invoice.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Invoices were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Invoices."
            });
        });
};



// Retrieve all Invoices from the database.
exports.getAllInvoicesUser = (req, res) => {
    Invoice.findAll({
        include: [{
            model: db.User,
            attributes: ['fullname'],
        }],

    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Invoices."
            });
        });
};