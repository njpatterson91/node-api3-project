const express = require("express");
const postsRouter = require("./posts/postRouter");
const userRouter = require("./users/userRouter");
const server = express();
const logger = require("./middleware/logger");
server.use(express.json());
server.use("/api/posts", logger, postsRouter);
server.use("/api/users", logger, userRouter);

server.get("/", logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
