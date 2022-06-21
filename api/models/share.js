const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShareSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
      maxLength: 500
    },
    link: {
      type: String,
      maxLength: 150
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

module.exports = mongoose.model('Share', ShareSchema)