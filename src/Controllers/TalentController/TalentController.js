const db = require("../../models");
const Talent = db.Talent;
const Op = db.Sequelize.Op;
// Create and Save a new Talent
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Talent
    const talent = {
        rollNo:req.body.rollNo,
        name: req.body.name,
        email: req.body.email,
        session: req.body.session,
        department: req.body.department
    };
    // Save Talent in the database
    Talent.create(talent)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Talent."
            });
        });
};
// Retrieve all Talent from the database.
exports.getAll = (req, res) => {
    Talent.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Talent."
            });
        });
};
// Find a single Talent with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Talent.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Talent with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Talent with id=" + id
            });
        });
};
// Update an Talent by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Talent.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Talent was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Talent with id=${id}. Maybe Talent was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Talent with id=" + id
            });
        });
};
// Delete an Talent with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Talent.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Talent was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Talent with id=${id}. Maybe Talent was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Talent with id=" + id
            });
        });
};
// Delete all Talent from the database.
exports.deleteAll = (req, res) => {
    Talent.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Talent were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Talent."
            });
        });
};

