const auth = require('./auth');
const user = require('./user');
const invite = require('./invite');
const communities = require('./communities');
const authorization = require('../middlewares/authorization');


module.exports = app => {
  app.get('/', (req, res) => {
    res.status(200).send({
      message: "Welcome to the Frond Authentication API. Register or Login to test Authentication."
    });
  });

  app.use('/api/auth', auth);
  //app.use('/api/invite', invite);
  app.use('/api/communities', authorization, communities);
  app.use('/api/user', authorization, user);
};
