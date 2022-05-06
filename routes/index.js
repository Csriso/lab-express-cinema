const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  const moviesModel = require("../models/Movie.model");

  moviesModel
    .find()
    .then((response) => {
      res.render("movies.hbs", {
        movies: response,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movie/:id", (req, res, next) => {
  const moviesModel = require("../models/Movie.model");
  const { id } = req.params;
  moviesModel
    .find({ _id: id })
    .then((response) => {
      res.render("movie.hbs", {
        movie: response[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
