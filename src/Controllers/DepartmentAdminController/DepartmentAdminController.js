const db = require("../../models");
const DepartmentAdmin = db.DepartmentAdmin;
const Op = db.Sequelize.Op;
// Create and Save a new DepartmentAdmin
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a DepartmentAdmin
    const departmentAdmin = {
        departmentId: req.body.departmentId,
        adminId: req.body.adminId
    };
    // Save DepartmentAdmin in the database
    DepartmentAdmin.create(departmentAdmin)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the DepartmentAdmins."
            });
        });
};
// Retrieve all DepartmentAdmins from the database.
exports.getAll = (req, res) => {
    DepartmentAdmin.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving DepartmentAdmins."
            });
        });
};
// Find a single DepartmentAdmin with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    DepartmentAdmin.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find DepartmentAdmin with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving DepartmentAdmin with id=" + id
            });
        });
};
// Update an DepartmentAdmin by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    DepartmentAdmin.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "DepartmentAdmin was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update DepartmentAdmin with id=${id}. Maybe DepartmentAdmin was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating DepartmentAdmin with id=" + id
            });
        });
};
// Delete an DepartmentAdmin with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    DepartmentAdmin.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "DepartmentAdmin was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete DepartmentAdmin with id=${id}. Maybe DepartmentAdmin was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete DepartmentAdmin with id=" + id
            });
        });
};
// Delete all DepartmentAdmins from the database.
exports.deleteAll = (req, res) => {
    DepartmentAdmin.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} DepartmentAdmins were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all DepartmentAdmins."
            });
        });
};


// Delete an DepartmentAdmin with the specified id in the request
exports.deleteByAttribute = (req, res) => {
    const id = req.params.id;
    const attr=req.params.attribute
    DepartmentAdmin.destroy({
        where: { attr: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "DepartmentAdmin was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete DepartmentAdmin with id=${id}. Maybe DepartmentAdmin was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete DepartmentAdmin with id=" + id
            });
        });
};



// Delete an DepartmentAdmin with the specified id in the request
exports.deleteDepartmentAdmin = (req, res) => {
    const data=req.body.values;


    DepartmentAdmin.destroy({
        where: {
            [data.attributeName1]: data.val1,
            [data.attributeName2]:data.val2,
}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "DepartmentAdmin was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete DepartmentAdmin with id=${data.val1}. Maybe DepartmentAdmin was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete DepartmentAdmin with id=" + data.val1
            });
        });
};