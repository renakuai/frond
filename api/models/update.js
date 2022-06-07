const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpdateSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      maxLength: 1000
    },
    img: {
      type: String,
      maxLength: 150
    },
    author: {
      type: Schema.Types.ObjectID,
      ref: 'User'
    },
    comments: [{
      type: Schema.Types.ObjectID,
      ref: 'Comment'
    }],
    type: {
      type: String,
      required: true,
      enum: ['Frond', 'Share']
    },
    dateShared: {
      type: Date,
      default: Date.now
    }
  }
)

//virtual for user's URL
UpdateSchema.virtual('url')
  .get(function () {
    return '/updates/' + this._id;
  })

module.exports = mongoose.model('Update', UpdateSchema)