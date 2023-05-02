const db = require("../models");

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
