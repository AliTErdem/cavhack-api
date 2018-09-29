var express = require('express');
var router = express.Router();
//var Profile = require('../models').profile
var Profile = require('../mock/profile')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('W.T. Woodson')
});

router.get('/profiles', function (req, res) {
  res.send(Profile.findAll())
})


router.get('/profiles/:id', function (req, res) {
  var profile = Profile.findById(req.params.id)
  res.send(profile)
})

router.get('**', function (req, res, next) {
  res.send("ur stupid!")
})

router.post('/profiles', function (req, res) {
  var profiles = Profile.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bio: req.body.bio,
    interests: req.body.interests,
    skills: req.body.skills
  })
  res.send(profiles)
})

router.put('/profiles/:id', function(req, res) {
  var profile = Profile.update(req.params.id, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bio: req.body.bio,
    interests: req.body.interests,
    skills: req.body.skills
  })
  res.send(profile)
})

router.delete('/profiles/:id', function(req, res) {
  var profiles =Profile.remove(req.parms.id)
  res.send(profile)
})

 
module.exports = router;
