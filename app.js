
var user = prompt('What is your name?');
alert('Hi there, ' + user + ', imma ask you a question.');
console.log('The user\'s name is ' + user);

var answer1 = prompt(user + ', this is a yes/no question, so please answer with Y or N. Does Sam have 4 cats?');
console.log('The user answered Question 1: ' + answer1);

//question one
//print out function rather than alert
var response1 = document.getElementById('ref1');
function question1() {
  if(answer1 === 'N') {
    response1.textContent = 'Damn straight. Sam has 3 cats.';
  }
  else {
    response1.textContent = 'WRONG. YOU LOSE. HAHA.';

  }
}
//call function
question1();
