const db = require("../../models");
const Admin = db.Admin;
const Op = db.Sequelize.Op;
// Create and Save a new Admin
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Admin
    const admin = {
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname
    };
    // Save Admin in the database
    Admin.create(admin)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Admins."
            });
        });
};
// Retrieve all Admins from the database.
exports.getAll = (req, res) => {
    Admin.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Admins."
            });
        });
};
// Find a single Admin with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Admin.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Admin with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Admin with id=" + id
            });
        });
};
// Update an Admin by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Admin.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Admin was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Admin with id=${id}. Maybe Admin was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Admin with id=" + id
            });
        });
};
// Delete an Admin with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Admin.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Admin was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Admin with id=" + id
            });
        });
};
// Delete all Admins from the database.
exports.deleteAll = (req, res) => {
    Admin.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Admins were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Admins."
            });
        });
};

