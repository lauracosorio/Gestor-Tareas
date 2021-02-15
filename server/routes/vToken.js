const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("user_token");
  if (!token) {
    res.status(401).send("Access Denied");
  }

  try {
      const verified = jwt.verify(token, process.env.SECRET_TOKEN);
      req.user = verified;
      next();
  } catch (error) {
      res.status(400).send('Token Invalido')
  }
}
