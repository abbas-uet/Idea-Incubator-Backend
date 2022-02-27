const db = require("../../models");
const IndustryServices = db.IndustryServices;
const Op = db.Sequelize.Op;
// Create and Save a new IndustryServices
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a IndustryServices
    const industryServices = {
        name: req.body.name,
        industry_id:req.body.industry_id
    };
    // Save IndustryServices in the database
    IndustryServices.create(industryServices)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the IndustryServicess."
            });
        });
};
// Retrieve all IndustryServicess from the database.
exports.getAll = (req, res) => {
    IndustryServices.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving IndustryServicess."
            });
        });
};
// Find a single IndustryServices with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    IndustryServices.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find IndustryServices with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving IndustryServices with id=" + id
            });
        });
};
// Update an IndustryServices by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    IndustryServices.update(req.body, {
        where: { IndustryServicesId: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "IndustryServices was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update IndustryServices with id=${id}. Maybe IndustryServices was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating IndustryServices with id=" + id
            });
        });
};
// Delete an IndustryServices with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    IndustryServices.destroy({
        where: { IndustryServicesId: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "IndustryServices was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete IndustryServices with id=${id}. Maybe IndustryServices was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete IndustryServices with id=" + id
            });
        });
};
// Delete all IndustryServicess from the database.
exports.deleteAll = (req, res) => {
    IndustryServices.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} IndustryServicess were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all IndustryServicess."
            });
        });
};

