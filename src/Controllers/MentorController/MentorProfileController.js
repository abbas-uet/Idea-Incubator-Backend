const db = require("../../models");
const MentorProfile = db.MentorProfile;
const Op = db.Sequelize.Op;
// Create and Save a new MentorProfile
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a MentorProfile
    const mentorProfile = {
        profile_image: req.body.src,
        headline: req.body.headline,
        location: req.body.location,
        description:req.body.description,
        mentor_id:req.body.mentor_id
    };
    // Save MentorProfile in the database
    MentorProfile.create(mentorProfile)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the MentorProfiles."
            });
        });
};
// Retrieve all MentorProfiles from the database.
exports.getAll = (req, res) => {
    MentorProfile.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving MentorProfiles."
            });
        });
};
// Find a single MentorProfile with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    MentorProfile.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find MentorProfile with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving MentorProfile with id=" + id
            });
        });
};
// Update an MentorProfile by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    MentorProfile.update(req.body, {
        where: { MentorProfileId: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "MentorProfile was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update MentorProfile with id=${id}. Maybe MentorProfile was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating MentorProfile with id=" + id
            });
        });
};
// Delete an MentorProfile with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    MentorProfile.destroy({
        where: { MentorProfileId: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "MentorProfile was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete MentorProfile with id=${id}. Maybe MentorProfile was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete MentorProfile with id=" + id
            });
        });
};
// Delete all MentorProfiles from the database.
exports.deleteAll = (req, res) => {
    MentorProfile.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} MentorProfiles were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all MentorProfiles."
            });
        });
};

