const { sequelize } = require("../models");
const db = require("../models");
const Op = require('sequelize').Op;

const Articles = db.articles;

exports.getArticleCountByYear = (req, res) => {

    const startDate = new Date(req.params.year, 0, 1).toLocaleDateString();
    const endDate = new Date(req.params.year, 12, 0).toLocaleDateString();
    console.log(startDate, endDate)
    Articles.findAll({
        attributes: [
            'source', 
            'main_bias', 
            [sequelize.fn('COUNT', sequelize.col("headline")), 'count']],
        where: {
            published_date: {
                [Op.between]: [startDate, endDate]
            }
        },
        group: ["source", "main_bias"]
    }).then(data =>{
      res.send(data);
    }).catch (error => {
      res.status(500).send({
      message: error
    })
  })
}