module.exports = app => {
    const results = require("../controllers/results.controller.js");
    var router = require("express").Router();

    // GET ITEMS
    router.get("/getVotesByOfficeAndYear", results.getVotesByOfficeAndYear);

    app.use("/api", router);
}