// Entry point of our backend side (creating and listening on port)
const express = require("express");
const cors = require("cors");
const db = require("./app/models")

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log("Sucessfully connected to DB");
  })
  .catch((error) => {
    console.log("Unable to connect to DB: ", error);
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
