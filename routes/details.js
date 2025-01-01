var express = require("express");
var router = express.Router();

router.get("/:id", function (req, res) {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);

  res.render("details", { post });
});

module.exports = router;
