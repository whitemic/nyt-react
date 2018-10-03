import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    console.log("articleData below");
    console.log(articleData);
    return axios.post("/api/articles", articleData);
  },

  nytSearch: function(query, startYear, endYear) {
      return axios.post("/api/nyt", {
        data: {
          query: query,
          startYear: startYear,
          endYear: endYear
        }
      });
  }
};