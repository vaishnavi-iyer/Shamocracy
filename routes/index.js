var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  console.log('I am here', req.user)
  res.render('index', { title: 'Express' });
});

function ensureAuthenticated(req, res, next){
  if (req.isAuthenticated()){
    console.log('authenticated')
    return next()
  }
  console.log('not authenticated')
  res.redirect('login')
}
module.exports = router;

