module.exports = app => {
    const results = require("../controllers/results.controller.js");
    const voters = require("../controllers/voters.controller.js")
    var router = require("express").Router();

    // GET ITEMS FROM RESULTS
    router.get("/get-votes/:year/:office", results.getVotesByOfficeAndYear);
    router.get("/total-state-year/:year/:office", results.getTotalVoteByOfficeStateYear);
    router.get("/geo/:year/:office", results.getGeoByOfficeAndYear);
    router.get("/max/:year/:office", results.getMaxVotesByOfficeAndYear);

    router.get("/get-voter-regis/:year", voters.getVoterRegistrationByYear);

    app.use("/api", router);
}