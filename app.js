
var user = prompt('What is your name?');
alert('Hi there, ' + user + ', imma ask you a question.');
console.log('The user\'s name is ' + user);

//var answer1 = prompt(user + ', this is a yes/no question, so please answer with Y or N. Does Sam have 4 cats?');
//console.log('The user answered Question 1: ' + answer1);

//question one
//print out function rather than alert
var response1 = document.getElementById('ref1');
var quesData = [[user + ', this is a yes/no question, so please answer with Y or N. Does Sam have 4 cats?','n', 'no', 'Damn straight. Sam has 3 cats.','WRONG. YOU LOSE. HAHA.', response1]]
function questions() {
  var answer1 = prompt(quesData[i][0]);
  console.log('The user answered Question 1: ' + answer1);
  if(answer1.toLowerCase() === quesData[i][1] || answer1.toLowerCase() === quesData[i][2]) {
//correct
    quesData[i][5].textContent = quesData[i][3];
    quesData[i][5].className = 'right';
  }
//incorrect
  else {
    quesData[i][5].textContent = quesData[i][4];
    quesData[i][5].className = 'wrong';
  }
}
//call function
for (var i = 0; i < quesData.length; i++) {
  questions();
}
