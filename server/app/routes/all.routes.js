module.exports = app => {
    const results = require("../controllers/results.controller.js");
    // const voters = require("../controllers/voters.controller.js");
    const votersView = require("../controllers/votersView.controller.js");
    const articles = require("../controllers/articles.controller.js")
    var router = require("express").Router();

    // GET ITEMS FROM RESULTS
    router.get("/get-votes/:year/:office", results.getVotesByOfficeAndYear);
    router.get("/total-state-year/:year/:office", results.getTotalVoteByOfficeStateYear);
    router.get("/geo/:year/:office", results.getGeoByOfficeAndYear);
    router.get("/max/:year/:office", results.getMaxVotesByOfficeAndYear);

    // GET ITEMS FROM VOTERS
    router.get("/get-voter-regis/:year", votersView.getVoterRegistrationByYear);


    // GET ITEMS FROM ARTICLES
    router.get("/get-article-count-by-year/:year", articles.getArticleCountByYear);
    router.get("/get-all-articles-count", articles.getAllArticleCountByYearAndTerm);
    router.get("/get-article-total-count", articles.getArticlesTotal);
    router.get("/get-count-by-source", articles.getAllArticlesBySource)
    app.use("/api", router);
}