
var user = prompt('What is your name?');
alert('Hi there, ' + user + ', imma ask you a question.');
console.log('The user\'s name is ' + user);

var answer1 = prompt(user + ', this is a yes/no question, so please answer with Y or N. Does Sam have 4 cats?');
console.log('The user answered Question 1: ' + answer1);

function question1() {
  if(answer1 === 'N') {
    alert('Damn straight. Sam has 3 cats.');
  }
  else {
    alert('WRONG. YOU LOSE. HAHA.');

  }
}
question1();
