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

exports.getTotalVoteByOfficeStateYear = (req, res) => {
  Results.findAll({
    attributes: [
      "year",
      "party",
      [sequelize.fn("SUM", sequelize.col("vote_count")), 'sum_count']],
    where: {
      office: req.params.office
    },
    group: ["year", "party"],
    order: ["year", "party"]
  }).then (data => {
    let result = {}
    for (let i = 0; i < data.length; ++i) {
      // console.log(data[i].dataValues)
      let current = data[i].dataValues
      if (current.party === "DEM") {
        result[current.year] = {...result[current.year], DEM: Number(current.sum_count)}
      } else if (current.party === "REP") {
        result[current.year] = {...result[current.year], REP: Number(current.sum_count)}
      } else {
        result[current.year] = {...result[current.year], IND: Number(current.sum_count)}
      }
    }
    let final = []
    for (const [key, value] of Object.entries(result)) {
      console.log(`${key}: ${value.DEM}`);
      final.push({year: key, DEM: value.DEM, REP:value.REP, IND:value.IND})
    }
    console.log(final)
    res.send(final);
  }).catch (error => {
    res.status(500).send({
        message: error
    });
  });
};