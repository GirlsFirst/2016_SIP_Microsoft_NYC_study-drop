var Q1 = ["What's 1+1?", "11", "2", "1" ]
var Q2 = ["What's 3*3?", "6", "12", "9" ]
var Q3 = ["What's 5*5?", "25","10", "5" ]
var Questions = [Q1, Q2, Q3]

function mouseClick(){
var index = Math.floor((Math.random()*3)+0);
document.getElementById('question').innerHTML = Questions[index][0];
document.getElementById('choice1').innerHTML=Questions[index][1];
document.getElementById('choice2').innerHTML=Questions[index][2];
document.getElementById('choice3').innerHTML=Questions[index][3];
}

function saveInput(){
	document.getElementById('radio1').value;
}