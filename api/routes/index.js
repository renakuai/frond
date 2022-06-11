const auth = require('./auth');
const user = require('./user');
const invite = require('./invite');
const content = require('./content');
const authorization = require('../middlewares/authorization');


module.exports = app => {
  app.get('/', (req, res) => {
    res.status(200).send({
      message: "Welcome to the Frond Authentication API. Register or Login to test Authentication."
    });
  });

  app.use('/api/auth', auth);
  //app.use('/api/invite', invite);
  app.use('/api/content', authorization, content);
  app.use('/api/user', authorization, user);
};
