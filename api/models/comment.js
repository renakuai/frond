const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
      maxLength: 100
    },
    commenter: {
      type: Schema.Types.ObjectID,
      ref: 'User'
    },
    date: {
      type: Date,
      default: Date.now
    },
  }
)

//virtual for user's URL
CommentSchema.virtual('url')
  .get(function () {
    return '/comments/' + this._id;
  })

module.exports = mongoose.model('Comment', CommentSchema)