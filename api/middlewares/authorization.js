const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log(data)
    if (req.params.communityid) {
      if (data.communities.includes(req.params.community)) {
        return next()
      }
      else {
        return res.sendStatus(403);
      }
    }
    else {
      req.userId = data.id;
      return next();
    }
  } catch {
    return res.sendStatus(403);
  }
};