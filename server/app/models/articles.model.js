module.exports = (sequelize, Sequelize) => {
    const Articles = sequelize.define("all_articles", {
        headline: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        source: {
            type: Sequelize.STRING
        },
        published_date: {
            type: Sequelize.DATE
        },
        article_content: {
            type: Sequelize.STRING
        },
        main_bias: {
            type: Sequelize.STRING
        },
        query_bias: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        }
    });
    return Articles;
}
