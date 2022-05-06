const db = require("../../models");
const Idea = db.Idea;
const Op = db.Sequelize.Op;
// Create and Save a new Idea
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Idea
    const idea = {
        name: req.body.name,
        email: req.body.email,
        field:req.body.field,
        projectname:req.body.projectname,
    };
    // Save Idea in the database
    Idea.create(idea)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Ideas."
            });
        });
};
// Retrieve all Ideas from the database.
exports.getAll = (req, res) => {
    Idea.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Ideas."
            });
        });
};
// Find a single Idea with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Idea.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Idea with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Idea with id=" + id
            });
        });
};
// Update an Idea by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Idea.update(req.body, {
        where: { Ideaid: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Idea was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Idea with id=${id}. Maybe Idea was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Idea with id=" + id
            });
        });
};
// Delete an Idea with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Idea.destroy({
        where: { Ideaid: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Idea was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Idea with id=${id}. Maybe Idea was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Idea with id=" + id
            });
        });
};
// Delete all Ideas from the database.
exports.deleteAll = (req, res) => {
    Idea.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Ideas were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Ideas."
            });
        });
};



// Retrieve all Ideas from the database.
exports.getAllIdeasUser = (req, res) => {
    Idea.findAll({
        include: [{
            model: db.User,
            attributes: ['username','joindate','email',],
        }],

    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Ideas."
            });
        });
};