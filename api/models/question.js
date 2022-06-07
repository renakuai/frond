const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      maxLength: 100
    },
    answers: [{
      type: Schema.Types.ObjectID,
      ref: 'Answer'
    }],
    creator: {
      type: Schema.Types.ObjectID,
      ref: 'User'
    },
    type: {
      type: String,
      required: true,
      enum: ['Frond', 'Share']
    },
    category: {
      type: String,
      required: true,
      enum: ['Insightful', 'Funny', 'Pop culture', 'General', 'Custom']
    },
  }
)

//virtual for user's URL
QuestionSchema.virtual('url')
  .get(function () {
    return '/questions/' + this._id;
  })

module.exports = mongoose.model('Question', QuestionSchema)