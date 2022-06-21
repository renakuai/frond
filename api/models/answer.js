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
    dateAnswered: {
      type: Date,
      default: Date.now
    },
  }
)

module.exports = mongoose.model('Answer', AnswerSchema)