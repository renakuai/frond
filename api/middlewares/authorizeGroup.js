const User = require('../models/user');
const jwt = require('jsonwebtoken');

//verify req.user has group id
module.exports = (req, res, next) => {
  const token = req.cookies.access_token;
  const data = jwt.verify(token, process.env.JWT_SECRET);
  try {
    if (data.communities.includes(req.params.id)) {
      return next();
    }
  } catch {
    return res.sendStatus(403);
  }
}