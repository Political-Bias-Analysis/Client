module.exports = app => {
    const results = require("../controllers/results.controller.js");
    var router = require("express").Router();

    // GET ITEMS
    router.get("/:year/:office", results.getVotesByOfficeAndYear);
    router.get("/:year/:office/max", results.getMaxVotesByOfficeAndYear);
    app.use("/api", router);
}