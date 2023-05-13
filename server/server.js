// Entry point of our backend side (creating and listening on port)
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./app/models")

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log("Sucessfully connected to DB");
  })
  .catch((error) => {
    console.log("Unable to connect to DB: ", error);
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./app/routes/all.routes.js")(app);

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
