const db = require("../../models");
const UserProfile = db.UserProfile;
const Op = db.Sequelize.Op;
// Create and Save a new UserProfile
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a UserProfile
    const userProfile = {
        profile_image: req.body.src,
        headline: req.body.headline,
        location: req.body.location,
        project_name:req.body.project_name,
        tech_tools:req.body.tech_tools,
        description:req.body.description,
        file_url:req.body.file_url,
        user_id:req.body.user_id
    };
    // Save UserProfile in the database
    UserProfile.create(userProfile)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the UserProfiles."
            });
        });
};
// Retrieve all UserProfiles from the database.
exports.getAll = (req, res) => {
    UserProfile.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving UserProfiles."
            });
        });
};
// Find a single UserProfile with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    UserProfile.findByPk(id)
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
// Update an UserProfile by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    UserProfile.update(req.body, {
        where: { UserProfileId: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "UserProfile was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update UserProfile with id=${id}. Maybe UserProfile was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating UserProfile with id=" + id
            });
        });
};
// Delete an UserProfile with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    UserProfile.destroy({
        where: { UserProfileId: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "UserProfile was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete UserProfile with id=${id}. Maybe UserProfile was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete UserProfile with id=" + id
            });
        });
};
// Delete all UserProfiles from the database.
exports.deleteAll = (req, res) => {
    UserProfile.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} UserProfiles were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all UserProfiles."
            });
        });
};

