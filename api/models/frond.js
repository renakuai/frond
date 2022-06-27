const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const FrondSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 50
    },
    message: {
      type: String,
      maxLength: 150
    },
    recipients: [{
      type: Schema.Types.ObjectID,
      ref: 'User'
    }],
    questions: [{
      type: String,
      required: true,
    }],
    updates: [{
      type: Schema.Types.ObjectID,
      ref: 'Update'
    }],
    highFives: [{
      type: Schema.Types.ObjectID,
      ref: 'HighFive'
    }],
    shares: [{
      type: Schema.Types.ObjectID,
      ref: 'Share'
    }],
    dateCreated: {
      type: Date,
      default: Date.now
    },
    dateStart: {
      type: Date,
    },
    recurring: {
      type: String,
    },
    cadence: {
      type: String,
      enum: ['Weekly', 'Biweekly', '']
    },
    community: {
      type: Schema.Types.ObjectID,
      ref: 'Community'
    }
  }, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
)

FrondSchema.virtual('dateStart_formatted')
  .get(function () {
    return DateTime.fromJSDate(this.dateStart).toLocaleString(DateTime.DATE_MED)
  })


module.exports = mongoose.model('Frond', FrondSchema)