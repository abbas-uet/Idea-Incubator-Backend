const db = require("../../models");
const PromoCode = db.PromoCode;
const Op = db.Sequelize.Op;
// Create and Save a new PromoCode
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a PromoCode
    const promoCode = {
        name: req.body.user,
        discount: req.body.discount,
        unit: req.body.unit,
        expirydate:req.body.expirydate
    };
    // Save PromoCode in the database
    PromoCode.create(promoCode)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the PromoCodes."
            });
        });
};
// Retrieve all PromoCodes from the database.
exports.getAll = (req, res) => {
    PromoCode.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving PromoCodes."
            });
        });
};
// Find a single PromoCode with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    PromoCode.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find PromoCode with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving PromoCode with id=" + id
            });
        });
};
// Update an PromoCode by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    PromoCode.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "PromoCode was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update PromoCode with id=${id}. Maybe PromoCode was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating PromoCode with id=" + id
            });
        });
};
// Delete an PromoCode with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    PromoCode.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "PromoCode was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete PromoCode with id=${id}. Maybe PromoCode was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete PromoCode with id=" + id
            });
        });
};
// Delete all PromoCodes from the database.
exports.deleteAll = (req, res) => {
    PromoCode.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} PromoCodes were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all PromoCodes."
            });
        });
};

