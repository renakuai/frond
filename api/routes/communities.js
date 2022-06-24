var express = require('express');
var router = express.Router();
const community_controller = require('../controllers/communityController');
const user_controller = require('../controllers/userController');
const frond_controller = require('../controllers/frondController');
const question_controller = require('../controllers/questionController');
const update_controller = require('../controllers/updateController');
const answer_controller = require('../controllers/answerController');
const comment_controller = require('../controllers/commentController');
const validate = require('../middlewares/validate');
const authorizeGroup = require('../middlewares/authorizeGroup');

//GET fronds in a community
router.get('/:id/fronds', frond_controller.frond_list_get)

//GET users in group
router.get('/:id/users', authorizeGroup, community_controller.user_list_get);

//POST frond form response
router.post('/:id/fronds/create', authorizeGroup, frond_controller.create_frond_post);

module.exports = router;