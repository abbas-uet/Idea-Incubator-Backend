const db = require("../../models");
const Subscription = db.Subscription;
const Op = db.Sequelize.Op;
// Create and Save a new Subscription
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Subscription
    const subscription = {
        planname: req.body.planname,
        type: req.body.type,
        billingperiod: req.body.billingperiod,
        ammount:req.body.ammount,
        unit:req.body.unit
    };
    // Save Subscription in the database
    Subscription.create(subscription)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Subscriptions."
            });
        });
};
// Retrieve all Subscriptions from the database.
exports.getAll = (req, res) => {
    Subscription.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Subscriptions."
            });
        });
};
// Find a single Subscription with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Subscription.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Subscription with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Subscription with id=" + id
            });
        });
};
// Update an Subscription by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Subscription.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Subscription was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Subscription with id=${id}. Maybe Subscription was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Subscription with id=" + id
            });
        });
};
// Delete an Subscription with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Subscription.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Subscription was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Subscription with id=${id}. Maybe Subscription was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Subscription with id=" + id
            });
        });
};
// Delete all Subscriptions from the database.
exports.deleteAll = (req, res) => {
    Subscription.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Subscriptions were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Subscriptions."
            });
        });
};

