const Question = require('../models/question');

exports.question_list_get = function (req, res) {
  res.send('Not implemented: Question List')
}

exports.question_detail_get = function (req, res) {
  res.send('Not implemented: Question Detail: ' + req.params.id)
}

exports.question_create_get = function (req, res) {
  res.send('Not implemented: Question Create Form GET')
}

exports.question_create_post = function (req, res) {
  res.send('Not implemented: Question Create Form POST')
}

exports.question_delete_get = function (req, res) {
  res.send('Not implemented: Question Delete GET')
}

exports.question_delete_post = function (req, res) {
  res.send('Not implemented: Question Delete POST')
}

exports.question_update_get = function (req, res) {
  res.send('Not implemented: Question Update GET')
}

exports.question_update_post = function (req, res) {
  res.send('Not implemented: Question Update POST')
}