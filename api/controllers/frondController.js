const Frond = require('../models/frond');
const { uploader, sendMultipleEmails } = require('../utils/index')
const User = require('../models/user');
const { reduce } = require('async');


exports.create_frond_post = async (req, res) => {
  try {

    const {
      name,
      dateStart,
      recurring,
      cadence,
      recipients,
      questions
    } = req.body;


    //find email based on _id
    const userData = await User.find({
      _id: { $in: req.body.recipients }
    })

    let emails = [];

    userData.map((user) => {
      emails.push(user.email)
    })

    //create frond
    const newFrond = new Frond({ ...req.body });

    newFrond.save();

    //Get mail options
    let domain = "http://" + req.headers.host;
    let subject = req.body.name;
    let to = emails;
    let from = process.env.FROM_EMAIL;
    let link = "http://" + req.headers.host;
    let html = `<p>Hi!<p><br><p>A new Frond has been set up for your group. This <a href="${link}">Frond</a> will be sent on ${req.body.dateStart} and includes these questions:</p> 
                <br><p>${req.body.questions}</p>`

    await sendMultipleEmails({ to, from, subject, html });

    res.status(200).json({
      message: 'Successfully set up Frond!'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
};

exports.frond_list_get = function (req, res) {
  res.send('Not implemented: frond list: ' + req.params.id)
}

exports.frond_detail_get = function (req, res) {
  res.send('Not implemented: frond Detail: ' + req.params.id)
}

exports.frond_create_get = function (req, res) {
  res.send('Not implemented: frond Create Form GET')
}

exports.frond_create_post = function (req, res) {
  res.send('Not implemented: frond Create Form POST')
}

exports.frond_delete_get = function (req, res) {
  res.send('Not implemented: frond Delete GET')
}

exports.frond_delete_post = function (req, res) {
  res.send('Not implemented: frond Delete POST')
}

exports.frond_update_get = function (req, res) {
  res.send('Not implemented: frond Update GET')
}

exports.frond_update_post = function (req, res) {
  res.send('Not implemented: frond Update POST')
}