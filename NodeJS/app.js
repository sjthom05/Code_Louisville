//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require('https')
var username = 'sjthom05'

function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
}

//Connect to the API URL (https://teamtreehouse.com/username.json)
var request = https.get('https://teamtreehouse.com/'+ username +'.json', function(res){
    console.log(res.statusCode);
    var body = "";
    //Read the data
    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function(){
        //Parse the data
        var profile = JSON.parse(body);
        //Print the data
        printMessage(username, profile.badges.length, profile.points.JavaScript)
    });  
});

request.on('error', function(error){
    console.error(error.message);
});
