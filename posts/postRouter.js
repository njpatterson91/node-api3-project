const express = require("express");
const Posts = require("./postDb");
const router = express.Router();

router.get("/", (req, res) => {
  Posts.get().then((posts) => {
    res.status(200).json(posts);
  });
});

router.get("/:id", (req, res) => {
  Posts.getById(req.params.id)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not find post" });
    });
});

router.delete("/:id", (req, res) => {
  Posts.remove(req.params.id).then((post) => {
    res.status(500).json({ message: "post successfully deleted" });
  });
});

router.put("/:id", (req, res) => {
  Posts.update(req.params.id, req.body).then((post) => {
    res.status(200).json({ message: "it worked" });
  });
});

// custom middleware

function validatePostId(req, res, next) {}

module.exports = router;
