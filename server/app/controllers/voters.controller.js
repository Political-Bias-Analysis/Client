require('pg').defaults.parseInt8 = true

const { sequelize } = require("../models");
const db = require("../models");
const Op = require('sequelize').Op;

const Voters = db.voters;

exports.getVoterRegistrationByYear = (req, res) => {
  Voters.findAll({
    attributes: ['state', ['norm_voter_pop', 'registeredPer']],
    where: {
      year: req.params.year,
      state: {
        [Op.notIn]: ["AS", "GU", "MP", "VI"]
      }
    },
    order: [['norm_voter_pop', 'ASC']]
  }).then(data =>{
      res.send(data);
  }).catch (error => {
      res.status(500).send({
      message: error
    })
  })
};
