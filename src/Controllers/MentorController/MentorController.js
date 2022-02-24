const db = require("../../models");
const Mentor = db.Mentor;
const Op = db.Sequelize.Op;
// Create and Save a new Mentor
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Mentor
    const mentor = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };
    // Save Mentor in the database
    Mentor.create(mentor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Mentor."
            });
        });
};
// Retrieve all Mentor from the database.
exports.getAll = (req, res) => {
    Mentor.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Mentor."
            });
        });
};
// Find a single Mentor with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Mentor.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Mentor with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Mentor with id=" + id
            });
        });
};
// Update an Mentor by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Mentor.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Mentor was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Mentor with id=${id}. Maybe Mentor was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Mentor with id=" + id
            });
        });
};
// Delete an Mentor with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Mentor.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Mentor was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Mentor with id=${id}. Maybe Mentor was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Mentor with id=" + id
            });
        });
};
// Delete all Mentor from the database.
exports.deleteAll = (req, res) => {
    Mentor.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Mentor were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Mentor."
            });
        });
};

