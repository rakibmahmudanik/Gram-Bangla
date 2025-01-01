var express = require("express");
var router = express.Router();

/* GET New post. */
router.get("/", function (req, res, next) {
  res.render("new");
});

module.exports = router;
