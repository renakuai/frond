const { nextTick } = require('async')
const Community = require('../models/community');
const User = require('../models/community');
const async = require('async');


exports.community_list_get = function (req, res) {
  async.parallel({
    personal_friendship: function (callback) {
      Community.find({ type: 'Personal Friendship' })
        .sort({ date: 1 })
        .exec(callback)
    },
    personal_family: function (callback) {
      Community.find({ type: 'Personal Family' })
        .sort({ date: 1 })
        .exec(callback)
    },
    professional: function (callback) {
      Community.find({ type: 'Professional' })
        .sort({ date: 1 })
        .exec(callback)
    }
  }, function (err, communities) {
    if (err) {
      return next(err);
    }
    res.send({
      personal_friendship: communities.personal_friendship,
      personal_family: communities.personal_family,
      professional: communities.professional
    })
  })
}

exports.community_detail_get = function (req, res) {
  res.send('Not implemented: community Detail: ' + req.params.id)
}

exports.community_create_get = function (req, res) {
  res.send('Not implemented: community Create Form GET')
}

exports.community_create_post = function (req, res) {
  res.send('Not implemented: community Create Form POST')
}

exports.community_delete_get = function (req, res) {
  res.send('Not implemented: community Delete GET')
}

exports.community_delete_post = function (req, res) {
  res.send('Not implemented: community Delete POST')
}

exports.community_update_get = function (req, res) {
  res.send('Not implemented: community Update GET')
}

exports.community_update_post = function (req, res) {
  res.send('Not implemented: community Update POST')
}