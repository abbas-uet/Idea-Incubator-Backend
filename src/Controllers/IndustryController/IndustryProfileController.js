const db = require("../../models");
const IndustryProfile = db.IndustryProfile;
const Op = db.Sequelize.Op;
// Create and Save a new IndustryProfile
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a IndustryProfile
    const industryProfile = {
        profile_image: req.body.src,
        headline: req.body.headline,
        location: req.body.location,
        description:req.body.description,
        website:req.body.website,
        industry_id:req.body.industry_id
    };
    // Save IndustryProfile in the database
    IndustryProfile.create(industryProfile)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the IndustryProfiles."
            });
        });
};
// Retrieve all IndustryProfiles from the database.
exports.getAll = (req, res) => {
    IndustryProfile.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving IndustryProfiles."
            });
        });
};
// Find a single IndustryProfile with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    IndustryProfile.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find IndustryProfile with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving IndustryProfile with id=" + id
            });
        });
};
// Update an IndustryProfile by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    IndustryProfile.update(req.body, {
        where: { IndustryProfileId: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "IndustryProfile was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update IndustryProfile with id=${id}. Maybe IndustryProfile was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating IndustryProfile with id=" + id
            });
        });
};
// Delete an IndustryProfile with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    IndustryProfile.destroy({
        where: { IndustryProfileId: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "IndustryProfile was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete IndustryProfile with id=${id}. Maybe IndustryProfile was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete IndustryProfile with id=" + id
            });
        });
};
// Delete all IndustryProfiles from the database.
exports.deleteAll = (req, res) => {
    IndustryProfile.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} IndustryProfiles were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all IndustryProfiles."
            });
        });
};

