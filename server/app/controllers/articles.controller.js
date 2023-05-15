const { sequelize } = require("../models");
const db = require("../models");
const Op = require('sequelize').Op;

const Articles = db.articles;

exports.getArticleCountByYear = (req, res) => {

    const startDate = new Date(req.params.year, 0, 1).toLocaleDateString();
    const endDate = new Date(req.params.year, 12, 0).toLocaleDateString();
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

exports.getAllArticleCountByYearAndTerm = async (req, res) => {
  
  data = await db.sequelize.query("select extract(YEAR from published_date) as year, main_bias, count(headline) from all_articles where extract(YEAR from published_date) between 2016 and 2022 group by (year, main_bias) order by year;")
  let result = {}

  for (let i = 0; i < data[0].length; ++i) {
    let current = data[0][i];
    let year = current.year
    if (current.main_bias === "Abortion") {
      result[year] = {...result[year], abortion: current.count}
    } else if (current.main_bias === "immigration") {
      result[year] = {...result[year], immigration: current.count}
    } else if (current.main_bias === "racial") {
      result[year] = {...result[year], racial: current.count}
    } else if (current.main_bias === "socioeconomic") {
      result[year] = {...result[year], socioeconomic: current.count}
    }
  }
  let final = [];
  for (const [key, value] of Object.entries(result)) {
    final.push({year: key, abortion: value.abortion, immigration:value.immigration, 
      racial:value.racial, socioeconomic:value.socioeconomic})
  }
  res.send(final)

}

exports.getArticlesTotal = (req, res) => {
  Articles.findOne({
    attributes: [[sequelize.fn('COUNT', sequelize.col("headline")), 'count']]
  }).then(data =>{
    res.send(data);
  }).catch (error => {
    res.status(500).send({
    message: error
  })
})
}

exports.getAllArticlesBySource = (req, res) => {
  Articles.findAll({
    attributes: ["source", [sequelize.fn('COUNT', sequelize.col("headline")), 'count']],
    group: ['source']
  }).then(data =>{
    res.send(data);
  }).catch (error => {
    res.status(500).send({
    message: error
  })
})
}