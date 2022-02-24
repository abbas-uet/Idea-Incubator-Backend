const db = require("../../models");
const Files = db.Files;
const Op = db.Sequelize.Op;



// Create and Save a new Files
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Files
    const files = {
        src: process.env.HOST +'files/'+ req.file.filename,
        extensiontype: req.file.filename.split('.').pop(),
        fileof_id: req.body.fileof_id,
        tableid: req.body.tableid,
    };
    // Save Files in the database
    Files.create(files)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Files."
            });
        });
};
// Retrieve all Files from the database.
exports.getAllFiles = (req, res) => {
    const req_fileof_id=req.body.fileof_id
    const req_tableid=req.body.tableid
    Files.findAll({
        where: {
            [Op.and]: [
                {fileof_id:req_fileof_id},
                {tableid:req_tableid}
            ]
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Files."
            });
        });
};
// Find a single Files with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Files.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Files with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Files with id=" + id
            });
        });
};
// Update an Files by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Files.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Files was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Files with id=${id}. Maybe Files was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Files with id=" + id
            });
        });
};
// Delete an Files with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Files.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Files was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Files with id=${id}. Maybe Files was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Files with id=" + id
            });
        });
};
// Delete all Files from the database.
exports.deleteAll = (req, res) => {
    Files.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Files were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Files."
            });
        });
};

