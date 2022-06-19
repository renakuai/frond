const { nextTick } = require('async')
const Community = require('../models/community');
const User = require('../models/user');
const async = require('async');


exports.community_list_get = function (req, res, next) {
  User.findById(req.params.id)
    .populate('communities')
    .exec(function (err, user) {
      if (err) {
        return next(err)
      }
      res.send(user.communities)
    })
}

exports.user_list_get = function (req, res, next) {
  Community.findById(req.params.id)
    .populate('members', { 'firstName': 1, 'lastName': 1, 'email': 1, '_id': 1 })
    .exec(function (err, data) {
      if (err) {
        return next(err)
      }
      res.send(data.members)
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