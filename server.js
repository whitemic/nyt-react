const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("api/nyt/:query", ((req, res) => {
  axios.get(process.env.BASEURL + process.env.APIKEY + req.params.query)
    .then(response => {
      res.json(response.data.response.docs);
    });
}));

app.use(routes);

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nyt-react");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});