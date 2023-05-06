const { sequelize } = require("../models");
const db = require("../models");
require('pg').defaults.parseInt8 = true

const Results = db.results;

exports.getVotesByOfficeAndYear = (req, res) => {
  Results.findAll({
    attributes: ['year', 'office', 'state', 'party', 'vote_percentage', 'vote_count'],
    where: {
        year: req.params.year,
        office: req.params.office
    }
  }).then (data => {
    res.send(data);
  }).catch (error => {
    res.status(500).send({
        message: error
    });
  });
};

exports.getMaxVotesByOfficeAndYear = (req, res) => {
  Results.findAll({
    attributes: [
      'state', 
      'party', 
      [sequelize.fn("MAX", sequelize.col("vote_percentage")), 'max_percentage'], 
      [sequelize.fn("MAX", sequelize.col('vote_count')), 'max_count']],
    where: {
        year: req.params.year,
        office: req.params.office
    },
    group: ["state", "party"],
    order: ["state", "party"]
  }).then (data => {
    res.send(data);
  }).catch (error => {
    res.status(500).send({
        message: error
    });
  });
};
