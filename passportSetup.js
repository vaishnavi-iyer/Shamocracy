var passport =  require('passport')
var LocalStrategy =  require('passport-local').Strategy
var fs = require('fs')

var users = fs.readFileSync('./data/data.json', 'utf-8').users

module.exports = function setup () {
  var strategy = new LocalStrategy(function (username, password, done) {
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