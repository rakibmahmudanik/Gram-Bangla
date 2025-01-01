var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { posts });
});

router.post("/", (req, res) => {
  let { username, caption, image } = req.body;
  let newPost = {
    id: uuidv4(),
    username: username,
    image: image,
    caption: caption,
  };
  posts.push(newPost);
  console.log(req.body);
  res.redirect("http://localhost:3000/");
});
module.exports = router;
