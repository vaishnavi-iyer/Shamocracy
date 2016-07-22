var express = require('express')
var passport = require('passport')
var router = express.Router()
var fs = require('fs')

router.get('/', function (req, res) {
  res.render('signup')
})

router.post('/', function (req, res) {
  if(req.body.password === req.body.confirmpassword){
    var data = fs.readFileSync('./data/data.json')
    var usersObj = JSON.parse(data)
    var id = usersObj.users.length
    console.log(id)
    var newuser = {"id": id, "username": req.body.username, "password": req.body.password }
    usersObj.users.push(newuser)
    fs.writeFileSync('./data/data.json', JSON.stringify(usersObj),'utf-8')
    res.redirect('index')
  }
  else {
    res.render('signup', {info: 'Password and confirm passwords do not match'})
  }
  
})
module.exports = router;