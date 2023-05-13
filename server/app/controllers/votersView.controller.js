require('pg').defaults.parseInt8 = true

const { sequelize } = require("../models");
const db = require("../models");
const Op = require('sequelize').Op;

const VotersView = db.votersView;

exports.getVoterRegistrationByYear = (req, res) => {
  VotersView.findAll({
    attributes: ['state', 'state_name', ['norm_voter_pop', 'registeredPer']],
    where: {
      year: req.params.year,
      state: {
        [Op.notIn]: ["AS", "GU", "MP", "VI"]
      }
    },
    order: [['norm_voter_pop', 'ASC']]
  }).then(data =>{
      console.log(data)
      res.send(data);
  }).catch (error => {
      res.status(500).send({
      message: error
    })
  })
};
