//controller contains:
//register - queries email address to check if user exists
//login - check if user existsm if found, then compares password. if yes generatejwt
//verify - token passed via verify link
//resendtoken - if vnot verified, resend email verification
//sendverification - calls getverfication to return insrance of token

const User = require('../models/user');
const Token = require('../models/token');
const { sendEmail } = require('../utils');

//@route POST
//@access Public
//registers user
exports.register_post = async (req, res) => {
  try {
    const { email } = req.body;
    //check if email account exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: 'The email address you have entered is already associated with another account.'
      })
    }
    const newUser = new User({
      ...req.body,
      role: "basic"
    })
    const user_ = await newUser.save();
    await sendVerificationEmail(user_, req, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

//@route POST
//@access Public
//logs user in and returns JWT token
exports.login_post = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email
    })

    if (!user) {
      return res.status(401).json({
        message: 'The email address ' + email + ' is not associated with any account. Double-check your email address and try again.'
      });
    }

    //validate password
    if (!user.comparePassword(password)) {
      return res.status(401).json({
        message: 'Invalid email or password. Please try again.',
        //password: `${password}`
      });
    }

    // Make sure the user has been verified
    if (!user.isVerified) {
      return res.status(401).json({
        type: 'not-verified',
        message: 'Your account has not been verified yet. Please click on the verification link in your email.'
      });
    }
    // Login successful, create cookie, write token, and send back user
    const token = user.generateJWT();
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 14 * 24 * 3600000
    })
      .status(200).json({
        user: user
      });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};

//logout
exports.logout_get = async (req, res) => {
  return res.clearCookie("access_token")
    .status(200)
    .json({
      message: "Successfully logged out!"
    })
}

//@route GET
//@access Public
//Email verification (verify token)
exports.verify_get = async (req, res) => {
  if (!req.params.token) {
    return res.status(400).json({
      message: "We are unable to find a user for this token"
    })
  }

  try {
    //find matching token
    const token = await Token.findOne({ token: req.params.token });
    if (!token) {
      return res.status(400).json({
        message: 'We are umable to find a valud token. Your token may have expired.'
      })
    }
    //if find token, find matching user
    User.findOne({
      _id: token.userId
    }, (err, user) => {
      if (!user) {
        return res.status(400).json({
          message: 'We were unable to find a user for this token.'
        })
      }
      if (user.idVerified) {
        return res.status(400).json({
          message: 'This user has already been verified.'
        })
      }

      //verify and save the user
      user.isVerified = true;
      user.save(function (err) {
        if (err) {
          return res.status(500).json({
            message: err.message
          })
        }
        res.status(200).send("The account has been verified. Please log in.")
      })
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

//@Route POST
//@access Public
//Resend verification token
exports.resendToken_post = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      email
    })
    if (!user) {
      return res.status(401).json({
        message: 'The email address ' + req.body.email + ' is not associated with an acocunt. Please check your email address and try again.'
      })
    }
    if (user.isVerified) {
      return res.status(400).json({
        message: 'This account has already been verified. Please log in.'
      })
    }
    await sendVerificationEmail(user, req, res);
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

async function sendVerificationEmail(user, req, res) {
  try {
    const token = user.generateVerificationToken();
    await token.save();

    let subject = "Account Verification"
    let to = user.email;
    let from = process.env.FROM_EMAIL;
    let link = "http://" + req.headers.host + "/api/auth/verify/" + token.token;
    let html = `<p>Hi ${user.firstName}<p><br><p>Please click on the following <a href="${link}">link</a> to verify your account.</p> 
    <br><p>If you did not request this, please ignore this email.</p>`;

    await sendEmail({
      to, from, subject, html
    })

    res.status(200).json({
      message: 'A verification email has been sent to ' + user.email + '.'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}