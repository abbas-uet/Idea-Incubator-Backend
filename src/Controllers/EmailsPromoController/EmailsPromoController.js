const db = require("../../models");
const EmailsPromo = db.EmailsPromo;
const Op = db.Sequelize.Op;
// Create and Save a new EmailsPromo
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a EmailsPromo
    const emailsPromo = {
        id: req.body.id,
        emailid: req.body.emailid,
        promoid: req.body.promoid,

    };
    // Save EmailsPromo in the database
    EmailsPromo.create(emailsPromo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the EmailsPromos."
            });
        });
};
// Retrieve all EmailsPromos from the database.
exports.getAll = (req, res) => {
    EmailsPromo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving EmailsPromos."
            });
        });
};
// Find a single EmailsPromo with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    EmailsPromo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find EmailsPromo with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving EmailsPromo with id=" + id
            });
        });
};
// Update an EmailsPromo by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    EmailsPromo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "EmailsPromo was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update EmailsPromo with id=${id}. Maybe EmailsPromo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating EmailsPromo with id=" + id
            });
        });
};
// Delete an EmailsPromo with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    EmailsPromo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "EmailsPromo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete EmailsPromo with id=${id}. Maybe EmailsPromo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete EmailsPromo with id=" + id
            });
        });
};
// Delete all EmailsPromos from the database.
exports.deleteAll = (req, res) => {
    EmailsPromo.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} EmailsPromos were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all EmailsPromos."
            });
        });
};

