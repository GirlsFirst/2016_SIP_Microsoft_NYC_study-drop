var Q1 = ["What's 1+1?", "11", "2", "1", "2" ] //2 element = right answer
var Q2 = ["What's 3*3?", "6", "12", "9", "9" ] //3 element = right answer
var Q3 = ["What's 5*5?", "25","10", "5", "25" ] // 1 element = right answer
var Questions = [Q1, Q2, Q3]

function mouseClick(){
console.log("youve clicked next");
var index = Math.floor((Math.random()*3)+0);
document.getElementById('question').innerHTML =Questions[index][0];
document.getElementById('choice1').innerHTML=Questions[index][1];
document.getElementById('choice2').innerHTML=Questions[index][2];
document.getElementById('choice3').innerHTML=Questions[index][3];

//console.log(document.getElementById('choice1').innerHTML);

if (document.getElementById('radio1').checked){
	console.log("the first radio button is pressed");
	console.log("we are printing out the correct answer: " + Questions[index][4]);
	if(document.getElementById('choice1').innerHTML==Questions[index][4]){
		console.log("you chose the correct answer: ");
		console.log("the correct answer is: " + document.getElementById('choice1').innerHTML);
    	if(document.getElementById('radio1').checked = true){
    		document.getElementById('radio1').checked = false;

	}
    	}
	
}
if (document.getElementById('radio2').checked){
	console.log("the second radio button is pressed");
	console.log("we are printing out the correct answer: " + Questions[index][4]);
	if(document.getElementById('choice2').innerHTML==Questions[index][4]){
		console.log("you chose the correct answer: ");
		console.log("the correct answer is: " + document.getElementById('choice2').innerHTML);
		if(document.getElementById('radio2').checked = true){
			document.getElementById('radio2').checked = false;
		}
	}
	
}
if (document.getElementById('radio3').checked){
	console.log("the third radio button is pressed");
	console.log("we are printing out the correct answer: " + Questions[index][4]);
	if(document.getElementById('choice3').innerHTML==Questions[index][4]){
		console.log("you chose the correct answer: ");
		console.log("the correct answer is: " + document.getElementById('choice3').innerHTML);
		if(document.getElementById('radio3').checked = true){
			document.getElementById('radio3').checked = false;
		}
	}
	
}

}
 
/*function check(){
	document.getElementById('radio1').checked = true;
}

function uncheck(){
	document.getElementById('radio1').checked = false;
}*/