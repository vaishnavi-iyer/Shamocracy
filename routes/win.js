var express = require('express')
var router = express.Router()

router.get('/', ensureAuthenticated, function(req, res) {
  res.render('win')
})

function ensureAuthenticated(req, res, next){
  if (req.isAuthenticated()){
    console.log('authenticated')
    return next()
  }
  console.log('not authenticated')
  res.redirect('login')
}

module.exports = router