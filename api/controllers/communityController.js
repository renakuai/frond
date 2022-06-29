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

exports.community_create_post = async (req, res) => {
  try {
    const {
      name,
      type,
      members,
      created
    } = req.body

    const new_community = new Community(...req.body);
    await new_community.save();
    res.status(200).json({
      message: 'Community creation was successful'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }

}

exports.community_detail_get = function (req, res) {
  res.send('Not implemented: community Detail: ' + req.params.id)
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