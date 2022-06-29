const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 100
    },
    img: [{
      type: String,
      maxLength: 2150
    }],
    members: [{
      type: Schema.Types.ObjectID,
      ref: 'User'
    }],
    created: {
      type: Date,
      default: Date.now
    },
    fronds: [{
      type: Schema.Types.ObjectID,
      ref: 'Frond'
    }],
    type: {
      type: String,
      required: true,
      enum: ['Professional', 'Personal Friendship', 'Personal Family']
    },
  }
)

//virtual for user's URL
CommunitySchema.virtual('url')
  .get(function () {
    return '/communities/' + this._id;
  })

module.exports = mongoose.model('Community', CommunitySchema)