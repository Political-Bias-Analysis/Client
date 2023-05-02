module.exports = (sequelize, Sequelize) => {
    const Results = sequelize.define("results", {
        year: {
            type: Sequelize.INTEGER
        },
        office: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        party: {
            type: Sequelize.STRING
        },
        vote_percentage: {
            type: Sequelize.FLOAT
        },
        vote_count: {
            type: Sequelize.INTEGER
        }
    });
    return Results;
}
