const db = require("../../models");
const Industry = db.Industry;
const Op = db.Sequelize.Op;
// Create and Save a new Industry
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Industry
    const industry = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };
    // Save Industry in the database
    Industry.create(industry)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Industry."
            });
        });
};
// Retrieve all Industry from the database.
exports.getAll = (req, res) => {
    Industry.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Industry."
            });
        });
};
// Find a single Industry with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Industry.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Industry with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Industry with id=" + id
            });
        });
};
// Update an Industry by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Industry.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Industry was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Industry with id=${id}. Maybe Industry was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Industry with id=" + id
            });
        });
};
// Delete an Industry with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Industry.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Industry was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Industry with id=${id}. Maybe Industry was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Industry with id=" + id
            });
        });
};
// Delete all Industry from the database.
exports.deleteAll = (req, res) => {
    Industry.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Industry were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Industry."
            });
        });
};

