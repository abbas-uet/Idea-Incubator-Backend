const db = require("../../models");
const CurrencyUnit = db.CurrencyUnit;
const Op = db.Sequelize.Op;
// Create and Save a new CurrencyUnit
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a CurrencyUnit
    const currencyUnit = {
        name: req.body.name,
    };
    // Save CurrencyUnit in the database
    CurrencyUnit.create(currencyUnit)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the CurrencyUnits."
            });
        });
};
// Retrieve all CurrencyUnits from the database.
exports.getAll = (req, res) => {
    CurrencyUnit.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving CurrencyUnits."
            });
        });
};
// Find a single CurrencyUnit with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    CurrencyUnit.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find CurrencyUnit with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving CurrencyUnit with id=" + id
            });
        });
};
// Update an CurrencyUnit by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    CurrencyUnit.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "CurrencyUnit was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update CurrencyUnit with id=${id}. Maybe CurrencyUnit was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating CurrencyUnit with id=" + id
            });
        });
};
// Delete an CurrencyUnit with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    CurrencyUnit.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "CurrencyUnit was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete CurrencyUnit with id=${id}. Maybe CurrencyUnit was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete CurrencyUnit with id=" + id
            });
        });
};
// Delete all CurrencyUnits from the database.
exports.deleteAll = (req, res) => {
    CurrencyUnit.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} CurrencyUnits were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all CurrencyUnits."
            });
        });
};

