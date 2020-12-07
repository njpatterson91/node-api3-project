const logger = (req, res, next) => {
  var date = new Date().toUTCString();
  console.log(req.method, req.originalUrl, new Date(date), req.ip);
  next();
};

module.exports = logger;
