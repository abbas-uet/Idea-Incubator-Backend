const db = require("../../models");
const SuperAdmin = db.SuperAdmin;
const Op = db.Sequelize.Op;

// Create and Save a new Super Admin
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a SuperAdminRoutes
    const superAdmin = {
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        fullname: req.body.fullname
    };
    // Save SuperAdminRoutes in the database
    SuperAdmin.create(superAdmin)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Super Admins."
            });
        });
};
// Retrieve all SuperAdmins from the database.
exports.getAll = (req, res) => {
    SuperAdmin.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Super Admins."
            });
        });
};
// Find a single Super Admin with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    SuperAdmin.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Super Admin with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Super Admin with id=" + id
            });
        });
};
// Update a Super Admin by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    SuperAdmin.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Super Admin was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Super Admin with id=${id}. Maybe Super Admin was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Super Admin with id=" + id
            });
        });
};
// Delete a Super Admin  with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    SuperAdmin.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Super Admin was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Super Admin with id=${id}. Maybe Super Admin was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Super Admin with id=" + id
            });
        });
};
// Delete all SuperAdmins from the database.
exports.deleteAll = (req, res) => {
    SuperAdmin.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Super Admins were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Super Admins."
            });
        });
};

