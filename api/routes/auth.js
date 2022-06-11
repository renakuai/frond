const express = require('express');
const { check } = require('express-validator');

const auth_controller = require('../controllers/authController');
const password_controller = require('../controllers/passwordController');
const validate = require('../middlewares/validate');
const authorization = require('../middlewares/authorization');


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: "You are in the Auth Endpoint. Register or Login to test Authentication."
  });
});

//Register verification
router.post('/register', [
  check('email').isEmail().withMessage('Please enter a valid email address'),
  check('password').not().isEmpty().isLength({ min: 6 }).withMessage('Your password must be at least 6 chars long.'),
  check('firstName').not().isEmpty().withMessage('You first name is required.'),
  check('lastName').not().isEmpty().withMessage('You last name is required.')
], validate, auth_controller.register_post);

//Login verification
router.post('/login', [
  check('email').isEmail().withMessage('Please enter a valid email address'),
  check('password').not().isEmpty(),
], validate, auth_controller.login_post);

//logout
router.get('/logout', authorization, auth_controller.logout_get)

//Email Verification
router.get('/verify/:token', auth_controller.verify_get);
router.post('/resend', auth_controller.resendToken_post);

//Password reset
router.post('/recover', [
  check('email').isEmail().withMessage('Please enter a valid email address'),
], validate, password_controller.recover_post);

router.get('/reset/:token', password_controller.reset_post);

router.post('/reset/:token', [
  check('password').not().isEmpty().isLength({ min: 6 }).withMessage('Your password must be at least 6 chars long'),
  check('confirmPassword', 'Your passwords do not match. Please try again.').custom((value, { req }) => (value === req.body.password)),
], validate, password_controller.resetPassword_post);


module.exports = router;