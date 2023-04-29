const { Sequelize } = require("../models");
const db = require("../models");

const Results = db.results;

exports.getAllVotesByYear = (req, res) => {
  let year = req.query.year;

  Results.findAll({
    attributes: ['year', 'office', 'state', 'party', 'vote_percentage', 'vote_count'],
    where: {
        year: year
    }
  }).then (data => {
    res.send(data);
  }).catch (error => {
    res.status(500).send({
        message: "Unable to retrive vote data (from results table) by year"
    });
  });
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};


// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};