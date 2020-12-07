const Users = require("../users/userDb");
const validUserId = (req, res, next) => {
  Users.getById(req.params.id).then((user) => {
    if (user === undefined) {
      res.status(400).json({ message: "Resource does not exist." });
    } else {
      next();
    }
  });
};

module.exports = validUserId;
