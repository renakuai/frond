const User = require('../models/user');

//verify req.user has group id
modules.exports = (req, res, next) => {
  const token = req.cookies.access_token;
  const data = jwt.verify(token, process.env.JWT_SECRET);
  try {
    if (data.communities.includes(req.params.communityid)) {
      return next();
    }
  } catch {
    return res.sendStatus(403);
  }
}