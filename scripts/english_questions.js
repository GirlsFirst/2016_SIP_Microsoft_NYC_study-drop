Q1=["Confident", "deduction", "avoid", "assured", "assured"]
 Q2=["Discount", "obstruct", "deduction", "damage", "deduction"]
 Q3=["Emotion", "stubborn", "honorable", "passion", "honorable"]
 Q5=["Joke", "ignore", "jest", "conduct", "jest"]
 Q6=["Smile", "frown", "grin", "happy", "grin"]
 Q7=["Wonderful", "amazing", "smile", "warm", "amazing"]
 Q8=["Rubbish", "spiders", "laundry", "trash", "trash"]
 Q9=["Jumped", "hopped", "under", "bend", "hopped"]
 Q10=["Hungry","empty", "starved", "angry", "stavred"]
 Q11=["Large", "kind", "great", "wonderful", "great"]
 Q12=["Leader", "first", "speaker", "ruler", "ruler"]
 Q13=["Order", "command", "test", "give", "command"]
 Q14=["Normal", "small", "regular", "insane", "regular"]
 Q15=["Prove", "trust", "know", "show", "show"]
 Q16=["Rescue", "save", "swim", "murder", "save"]
 Q17=["Tremble", "throw", "shake", "calm", "shake"]
 Q18=["Secret", "find", "trith", "hidden", "hidden"]
 Q19=["Strange", "odd", "sleepy", "wrong", "odd"]
 Q20=["Forgive", "tell", "forget", "pardon", "pardon"]

var Synonyms3 =[Q1, Q2, Q3, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20]
var index;
var score = 0;
var times_shown = 0;


function mouseClick(){
	index = Math.floor((Math.random()*Synonyms3.length)+0);
	document.getElementById('question').innerHTML=Synonyms3[index][0];
	document.getElementById('choice1').innerHTML=Synonyms3[index][1];
	document.getElementById('choice2').innerHTML=Synonyms3[index][2];
	document.getElementById('choice3').innerHTML=Synonyms3[index][3];

	document.getElementById('btn').addEventListener('click', function() {
      ["radio1", "radio2", "radio3"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
      return false;
	})

 	document.getElementById('results').innerHTML = "";

}


function check(){
	if (document.getElementById('radio1').checked) {
		var userchoice = document.getElementById('choice1').innerHTML
	}
	else if (document.getElementById('radio2').checked) {
		var userchoice = document.getElementById('choice2').innerHTML
	}
	else if (document.getElementById('radio3').checked) {
		var userchoice = document.getElementById('choice3').innerHTML
	}

	if (userchoice == Synonyms3[index][4]) {
		console.log(index);
		console.log(Synonyms3[index][4]);
		console.log(userchoice);
		document.getElementById('results').innerHTML = "Correct!"
		score++;
		document.getElementById('change').innerHTML = "Questions answered correctly: " + score;
		console.log('score has been changed');

	}
	else if (userchoice != Synonyms3[index][4]) {
		console.log(index);
		console.log(Synonyms3[index][4]);
		console.log(userchoice);
		document.getElementById('results').innerHTML = "Incorrect"
	}

	if (score % 10 == 0 && score != 0) {
		if(score/10 > times_shown ){
			var modal = document.getElementById('myModal');
			modal.style.display = "block";
			times_shown ++;	
		}

		


	}

	window.onclick = function(event){
		if (event.target == modal){
			modal.style.display = "none";
		}
	}

}