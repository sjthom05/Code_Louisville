var userInput = ""

//create function
function helloWorld (input)
{
  var output = ""
  //control and return statements
  if(input.toLowerCase() === 'hello')
  {
  	output = 'Hello World'
  }
  else
  {
  	output = 'That is not hello!'
  }

  return output
}

//Prompt user for input and store variable
do
{
  userInput = prompt("Type Hello!")
  //Call function
  //Alert user results
  alert(helloWorld(userInput))
}while(userInput.toLowerCase() != 'hello')

