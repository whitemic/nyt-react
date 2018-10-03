const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/nyt"
router.route("/")
      .post(articlesController.getNYTArticles);

module.exports = router;