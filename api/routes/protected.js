var express = require('express');
var router = express.Router();
const community_controller = require('../controllers/communityController');
const user_controller = require('../controllers/userController');
const frond_controller = require('../controllers/frondController');
const question_controller = require('../controllers/questionController');
const update_controller = require('../controllers/updateController');
const answer_controller = require('../controllers/answerController');
const comment_controller = require('../controllers/commentController');


//GET list of all groups
router.get('/communities', community_controller.community_list_get)

//GET individual group
router.get('/communities/:id', community_controller.community_detail_get)

//GET list of all users
router.get('/communities/users', user_controller.user_list_get)

//GET individual user
router.get('/communities/users/:id', user_controller.user_detail_get)

//GET list of all fronds
router.get('/communities/fronds', frond_controller.frond_list_get)

//GET individual user
router.get('/communities/fronds/:id', frond_controller.frond_detail_get)

//GET list of all questions
router.get('/communities/questions', question_controller.question_list_get)

//GET individual question
router.get('/communities/questions/:id', question_controller.question_detail_get)

//GET list of all answers
router.get('/communities/answers', answer_controller.answer_list_get)

//GET list of all shares
router.get('/communities/updates', update_controller.update_list_get)

//GET individual share
router.get('/communities/updates/:id', update_controller.update_detail_get)

//GET list of all comments
router.get('/communities/comments', comment_controller.comment_list_get)

module.exports = router;