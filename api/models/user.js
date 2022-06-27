const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Token = require('./token');
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxLength: 50
    },
    lastName: {
      type: String,
      required: true,
      maxLength: 50
    },
    about: {
      type: String,
      maxLength: 300
    },
    password: {
      type: String,
      required: 'Your password is required',
      max: 100
    },
    email: {
      type: String,
      required: true,
      maxLength: 50
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    resetPasswordToken: {
      type: String,
      default: false
    },
    resetPasswordExpires: {
      type: Date,
      required: false
    },
    profileImg: {
      type: String,
      maxLength: 150
    },
    communities: [{
      type: Schema.Types.ObjectId,
      ref: 'Community'
    }],
    role: {
      type: String,
      enum: ['admin', 'basic']
    },
    dateJoined: {
      type: Date,
      default: Date.now,
    },
  }
)


//hashing password before saving
UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash;
      next();
    })
  })
})

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);
  let payload = {
    id: this._id,
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
    communities: this.communities,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10)
  });
};

UserSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

UserSchema.methods.generateVerificationToken = function () {
  let payload = {
    userId: this._id,
    token: crypto.randomBytes(20).toString('hex')
  };

  return new Token(payload);
};

module.exports = mongoose.model('User', UserSchema);