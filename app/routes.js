var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.get('/pages', function (req, res) {
  res.render('page1', {'message' : 'Hello'});
});

module.exports = router
