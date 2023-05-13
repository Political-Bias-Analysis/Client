module.exports = (sequelize, Sequelize) => {
    const VotersView = sequelize.define("voters_clean", {
        year: {
            type: Sequelize.INTEGER
        },
        state: {
            type: Sequelize.STRING
        },
        state_name: {
            type: Sequelize.STRING
        },
        poplulation: {
            type: Sequelize.INTEGER
        },
        registered: {
            type: Sequelize.INTEGER
        },
        voted: {
            type: Sequelize.INTEGER
        },
        norm_voter_reg: {
            type: Sequelize.FLOAT
        },
        norm_voter_pop: {
            type: Sequelize.FLOAT
        }
    });
    return VotersView;
}