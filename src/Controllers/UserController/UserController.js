const db = require("../../models");
const User = db.User;
const Op = db.Sequelize.Op;
// Create and Save a new User
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a User
    const user = {
        username: req.body.username,
        password: req.body.password,
        joindate: req.body.joindate,
        email:req.body.email,
        fullname:req.body.fullname
    };
    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Users."
            });
        });
};
// Retrieve all Users from the database.
exports.getAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};
// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find User with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
};
// Update an User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
        where: { userId: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};
// Delete an User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
        where: { userId: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Users."
            });
        });
};

//get all the invoice for this user
exports.getAllUserInvoices = (req, res) => {
    const id = req.params.id;
    User.findByPk(id,{
        include: [{
            model: db.Invoice,
            required: true
        }]
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find UserProfile with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving UserProfile with id=" + id
            });
        });
};



//get all the User of a user
exports.getAllUserSubscriptionsInvoicesLast = (req, res) => {
    User.findAll({
        include: [{
            model: db.Subscription,
        },{
            model: db.Invoice,
            order: [
                ['invoiceid', 'DESC']],
            limit:1
        }],
        attributes: {exclude: ['password']},
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No User Available .`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Getting  User"
            });
        });
};
//get all the User of a user
exports.getAllUserSubscriptionsInvoices = (req, res) => {
    User.findAll({
        include: [{
            model: db.Subscription,
        },{
            model: db.Invoice,
        }],
        attributes: {exclude: ['password']},
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No User Available .`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Getting  User"
            });
        });
};

//get all the User of a user
exports.getAllUserSubscriptionsInvoicesById = (req, res) => {
    const id=req.params.id
    User.findByPk(id,{
        include: [{
            model: db.Subscription,
        },{
            model: db.Invoice,
        }],
        attributes: {exclude: ['password']},
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No User Available .`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Getting  User"
            });
        });
};




exports.getUserIdea = (req, res) => {
    User.findAll({
        include: [{
            model: db.Idea,
        }],where:{
            role:1
        },
        attributes: {exclude: ['password']},
    }).then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No User Available .`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Getting  User"
            });
        });
};


exports.getSubUserIdea = (req, res) => {
    const ideaid=req.params.id
    User.findAll({
        where:{
            role:0,
            ideaId:ideaid
        },
        attributes: {exclude: ['password']},
    }).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No User Available .`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Getting  User"
            });
        });
};