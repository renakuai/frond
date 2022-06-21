const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HighFiveSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
      maxLength: 500
    },
    recipient: {
      type: Schema.Types.ObjectID,
      ref: 'User'
    },
    author: {
      type: Schema.Types.ObjectID,
      ref: 'User'
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
)

module.exports = mongoose.model('HighFive', HighFiveSchema)