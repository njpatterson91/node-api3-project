const express = require("express");
const Posts = require("../posts/postDb");
const User = require("../users/userDb");
const validUserId = require("../middleware/validateId");

const router = express.Router();

router.post("/", (req, res) => {
  User.insert(req.body).then((user) => {
    res.status(200).json({ message: "User Created", user_details: user });
  });
});

router.post("/:id/posts", (req, res) => {
  const id = req.params.id;
  const text = req.body.text;
  const toPass = {
    user_id: id,
    text: text,
  };
  console.log(req.body);
  Posts.insert(toPass).then((post) => {
    res.status(200).json({ message: "success" });
  });
});

router.get("/", (req, res) => {
  User.get().then((user) => {
    res.status(200).json(user);
  });
});

router.get("/:id", validUserId, (req, res) => {
  User.getById(req.params.id).then((user) => {
    res.status(200).json(user);
  });
});

router.get("/:id/posts", validUserId, (req, res) => {
  User.getUserPosts(req.params.id).then((posts) => {
    res.status(200).json(posts);
  });
});

router.delete("/:id", validUserId, (req, res) => {
  User.remove(req.params.id).then((user) => {
    res.status(200).json({ message: "User deleted" });
  });
});

router.put("/:id", validUserId, (req, res) => {
  User.update(req.params.id, req.body).then((user) => {
    res.status(200).json({ message: "User updated" });
  });
});

//custom middleware

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
