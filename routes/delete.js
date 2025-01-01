var express = require("express");
var router = express.Router();

router.delete("/:id", function (req, res, next) {
  let { id } = req.params;
  posts = posts.filter((p) => id != p.id);
  res.redirect("http://localhost:3000");
});

module.exports = router;
