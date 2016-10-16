//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require('https')

//print out message
function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
}

//print out error message
function printError(error) {
    console.error(error.message);
}
function get(username) {
    //Connect to the API URL (https://teamtreehouse.com/username.json)
    var request = https.get('https://teamtreehouse.com/'+ username +'.json', function(res){
        console.log(res.statusCode);
        var body = "";
        //Read the data
        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function(){
            if(res.statusCode === 200) {
                try{
                    //Parse the data
                    var profile = JSON.parse(body);
                    //Print the data
                    printMessage(username, profile.badges.length, profile.points.JavaScript);
                } catch(error) {
                    //parse error
                    printError(error)
                }
            } else {
                //status code error
                printError({message: 'There was an error getting the profile for ' + username + '. (' + res.statusMessage +')'});
            }
        });  
    });

    //connection error
    request.on('error', printError);
}

module.exports.get = get;