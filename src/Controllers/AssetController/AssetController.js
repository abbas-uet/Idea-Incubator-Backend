const db = require("../../models");
const Asset = db.Asset;
const Op = db.Sequelize.Op;
// Create and Save a new Asset
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Asset
    const asset = {
        name: req.body.name,
        type: req.body.type,
        category: req.body.category,
        description:req.body.description,
        time_start:req.body.time_start,
        time_end:req.body.time_end,
        days:req.body.days,
    };
    // Save Asset in the database
    Asset.create(asset)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Assets."
            });
        });
};
// Retrieve all Assets from the database.
exports.getAll = (req, res) => {
    Asset.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Assets."
            });
        });
};
// Find a single Asset with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Asset.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Asset with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Asset with id=" + id
            });
        });
};
// Update an Asset by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Asset.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Asset was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Asset with id=${id}. Maybe Asset was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Asset with id=" + id
            });
        });
};
// Delete an Asset with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Asset.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Asset was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Asset with id=${id}. Maybe Asset was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Asset with id=" + id
            });
        });
};
// Delete all Assets from the database.
exports.deleteAll = (req, res) => {
    Asset.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Assets were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Assets."
            });
        });
};

exports.getLastId = (req, res) => {
    Asset.findOne({
        order: [ [ 'id', 'DESC' ]],
        attributes:['id']
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Asset with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Asset with id=" + id
            });
        });
};


// Find a single Asset with an id
exports.getOneAssetDepartment = (req, res) => {
    const id = req.params.id;
    Asset.findByPk(id,{
        include: [ {
            model: db.DepartmentAsset,
            attributes:['id'],
            include: {
                model: db.Department,
                attributes:['departmentname']
            },
        } ]
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Asset with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Asset with id=" + id
            });
        });
};





// Find a All the AssetDepartments
exports.getAllAssetDepartment = (req, res) => {
    Asset.findAll({
        include: [ {
            model: db.DepartmentAsset,
            attributes:['id'],
            include: {
                model: db.Department,
                attributes:['departmentname']
            },
        } ]
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Asset with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Asset with id=" + id
            });
        });
};



// Find a All the AssetDepartments
exports.getAllAssetName = (req, res) => {
    Asset.findAll({
        attributes:['id','fullname'],
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Asset with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Asset with id=" + id
            });
        });
};