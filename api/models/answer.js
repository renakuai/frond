const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema(
  {
    answer: {
      type: String,
      required: true,
      maxLength: 300
    },
    img: {
      type: String,
      maxLength: 150
    },
    answerer: {
      type: Schema.Types.ObjectID,
      ref: 'User'
    },
    question: {
      type: Schema.Types.ObjectID,
      ref: 'Question'
    },
    comments: [{
      type: Schema.Types.ObjectID,
      ref: 'Comment'
    }],
    dateAnswered: {
      type: Date,
      default: Date.now
    },
  }
)

//virtual for user's URL
AnswerSchema.virtual('url')
  .get(function () {
    return '/answers/' + this._id;
  })

module.exports = mongoose.model('Answer', AnswerSchema)