var express = require("express");
var router = express.Router();

router.get("/:id", function (req, res) {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);

  res.render("edit", { post });
});

router.patch("/:id", function (req, res) {
  let { id } = req.params;
  let newCaption = req.body.caption;
  let newImage = req.body.image;
  let post = posts.find((p) => id === p.id);
  post.caption = newCaption;
  if (newImage === "") {
    newImage = post.image;
  }
  post.image = newImage;
  console.log(post);

  res.redirect("http://localhost:3000");
});

module.exports = router;
