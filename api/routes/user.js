const express = require('express');
const { check } = require('express-validator');
const multer = require('multer');

const user_controller = require('../controllers/userController');
const validate = require('../middlewares/validate');

const router = express.Router();

const upload = multer().single('profileImage');

//GET list of users
router.get('/', user_controller.user_list_get);

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

module.exports = router;