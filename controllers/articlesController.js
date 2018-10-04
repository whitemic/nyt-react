const db = require("../models");
const axios = require("axios");

module.exports = {
    getNYTArticles: function(req, res) {
        const query = req.body.data.query;
        const startDate = req.body.data.startYear;
        const endDate = req.body.data.endYear;
        console.log(endDate);
        let params = { params: {
            "api-key": process.env.APIKEY,
            "q": query,
          }
        }
        if (startDate) {
            params.params.begin_date = startDate;
        }
        if (endDate) {
            params.params.end_date = endDate;
        }
        console.log(params);
        axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", params).then(function(data) {
          res.json(data.data.response.docs);
        }).catch(err => console.log(err));
      },
    findAll: function(req, res) {
        db.Article
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Article
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));    },
    create: function(req, res) {
        console.log("Made it to create");
        db.Article
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Article
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Article
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};