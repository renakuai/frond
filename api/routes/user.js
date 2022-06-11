const express = require('express');
const { check } = require('express-validator');
const multer = require('multer');

const user_controller = require('../controllers/userController');
const validate = require('../middlewares/validate');
const authorization = require('../middlewares/authorization');
const community_controller = require('../controllers/communityController');
const frond_controller = require('../controllers/frondController');
const question_controller = require('../controllers/questionController');
const update_controller = require('../controllers/updateController');
const answer_controller = require('../controllers/answerController');
const comment_controller = require('../controllers/commentController');

const router = express.Router();

const upload = multer().single('profileImage');

//GET list of users
router.get('/', authorization, user_controller.user_list_get);

//POST create a new user
router.post('/', [
  check('email').isEmail().withMessage('Please enter a valid email address'),
  check('firstName').not().isEmpty().withMessage('You first name is required'),
  check('lastName').not().isEmpty().withMessage('You last name is required')
], validate, user_controller.user_create_post);

//GET specific user
router.get('/:id', user_controller.user_detail_get);

//PUT update a specific user
router.put('/:id', upload, user_controller.user_update_put);

//DELETE a specific user
router.delete('/:id', user_controller.user_destroy);

//GET list of users' groups
router.get('/:id/communities', community_controller.community_list_get)

//GET individual group
router.get('/:id/communities/:communityid', community_controller.community_detail_get)

//GET list of all fronds in a group
router.get('/:id/communities/:communityid/fronds', frond_controller.frond_list_get)

//GET list of all questions in a group
router.get('/:id/communities/:communityid/questions', question_controller.question_list_get)

//GET individual question
//router.get('/communities/questions/:id', question_controller.question_detail_get)

//GET list of all answers
//router.get('/communities/answers', answer_controller.answer_list_get)

//GET list of all updates
router.get('/:id/communities/:communityid/updates', update_controller.update_list_get)

//GET individual share
//router.get('/communities/updates/:id', update_controller.update_detail_get)

//GET list of all comments
//router.get('/communities/comments', comment_controller.comment_list_get)

module.exports = router;