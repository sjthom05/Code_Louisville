//See readme for challenge instructions

/*
 * Note about github api: requires User-Agent header to be set. This can be done
 * in Node by passing an options object (rather than a simple url string) as the 
 * first param to the https.get() function
 *
 * So something like
 * var options = {
 *   hostname: api.github.com,
 *   path: <<try to find in documentation linked in readme>>,
 *   headers: {
 *     'User-Agent': '<<your github username>>'
 *   }
 * };
 *
 */
var https = require('https');

function printError(error) {
    console.error(error.message);
}


function getRepos(username){
  var options = {
    hostname: 'https://api.gethub.com',
    path: '/users/'+ username +'repos',
    method: 'GET',
    headers: {

    }
  }
  
  var request = https.get(options, function(res){
      var body = '';
      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          if(res.statusCode === 200){
            try{
              console.log('Repos for ' + username);
              console.log(body);
            } catch (error) {
              printError(error);
            } 
          } else {
            printError({message: 'There was an error getting the profile for ' + username + '. (' + res.statusMessage +')'});
          }
          
      })
  });
  


  
}

module.exports.getRepos = getRepos;