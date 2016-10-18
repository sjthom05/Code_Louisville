//See readme for challenge instructions
var github = require('./github.js')

//var usernames = ["sjthom05"];
var usernames = process.argv.slice(2);
usernames.forEach(function(user){
    console.log('User: '+user)
    console.log('Repo List:')
    github.getRepos(user)
})
//github.getRepos(username).forEach(function())