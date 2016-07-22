var passport =  require('passport')
var LocalStrategy =  require('passport-local').Strategy
var fs = require('fs')

var data = fs.readFileSync('./data/data.json', 'utf-8')
var users = JSON.parse(data).users

module.exports = function setup () {
  var strategy = new LocalStrategy(function (username, password, done) {
    console.log('user', username, password)
    var user = users.find(function (user) {
      return user.username === username && user.password === password
    })
    return done(null, user)
  })

  passport.use(strategy)

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    done(null, users.find(function (user) {
      return user.id === id
    }))
  })
}