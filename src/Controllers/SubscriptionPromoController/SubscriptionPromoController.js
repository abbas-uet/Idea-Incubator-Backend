const db = require("../../models");
const SubscriptionPromo = db.SubscriptionPromo;
const Op = db.Sequelize.Op;
// Create and Save a new SubscriptionPromo
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a SubscriptionPromo
    const subscriptionPromo = {
        subscriptionId: req.body.subscriptionId,
        promoId: req.body.promoId
    };
    // Save SubscriptionPromo in the database
    SubscriptionPromo.create(subscriptionPromo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the SubscriptionPromos."
            });
        });
};
// Retrieve all SubscriptionPromos from the database.
exports.getAll = (req, res) => {
    SubscriptionPromo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving SubscriptionPromos."
            });
        });
};
// Find a single SubscriptionPromo with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    SubscriptionPromo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find SubscriptionPromo with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving SubscriptionPromo with id=" + id
            });
        });
};
// Update an SubscriptionPromo by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    SubscriptionPromo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "SubscriptionPromo was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update SubscriptionPromo with id=${id}. Maybe SubscriptionPromo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating SubscriptionPromo with id=" + id
            });
        });
};
// Delete an SubscriptionPromo with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    SubscriptionPromo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "SubscriptionPromo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete SubscriptionPromo with id=${id}. Maybe SubscriptionPromo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete SubscriptionPromo with id=" + id
            });
        });
};
// Delete all SubscriptionPromos from the database.
exports.deleteAll = (req, res) => {
    SubscriptionPromo.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} SubscriptionPromos were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all SubscriptionPromos."
            });
        });
};

