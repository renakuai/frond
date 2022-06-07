const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FrondSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
      maxLength: 100
    },
    message: {
      type: String,
      required: true,
      maxLength: 100
    },
    recipients: [{
      type: Schema.Types.ObjectID,
      ref: 'User'
    }],
    questions: [{
      type: Schema.Types.ObjectID,
      ref: 'Question'
    }],
    updates: [{
      type: Schema.Types.ObjectID,
      ref: 'Update'
    }],
    dateCreated: {
      type: Date,
      default: Date.now
    },
    firstSendDate: {
      type: Date,
      default: Date.now
    },
    sendFrequency: {
      type: String,
      required: true,
      enum: ['Weekly', 'Biweekly', 'Monthly', 'One-time']
    },
  }
)

//virtual for user's URL
FrondSchema.virtual('url')
  .get(function () {
    return '/fronds/' + this._id;
  })

module.exports = mongoose.model('Frond', FrondSchema)