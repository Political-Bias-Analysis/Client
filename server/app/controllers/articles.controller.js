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
      let result = {}

      for (let i = 0; i < data.length; ++i) {
        let current = data[i].dataValues;
        let main = current.main_bias.toLowerCase();
        if (current.source === "CNN") {
          result[main] = {...result[main], CNN: current.count}
        } else if (current.source === "FOX") {
          result[main] = {...result[main], FOX: current.count}
        } else if (current.source === "NPR") {
          result[main] = {...result[main], NPR: current.count}
        } else if (current.source === "CBS") {
          result[main] = {...result[main], CBS: current.count}
        }
      }
      console.log(result)
      let final = [];
      for (const [key, value] of Object.entries(result)) {
        final.push({main_bias: key, CNN: value.CNN, FOX:value.FOX, NPR:value.NPR, CBS:value.CBS})
      }

      res.send(final);
    }).catch (error => {
      res.status(500).send({
      message: error
    })
  })
}