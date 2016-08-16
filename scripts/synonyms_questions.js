Q1=["What's the synonym for confident?", "deduction", "avoid", "assured", "assured"]
 Q2=["What's the synonym for discount?", "obstruct", "deduction", "damage", "deduction"]
 Q3=["What's the synonym emotion?", "stubborn", "honorable", "passion", "passion"]
 Q5=["What's the synonym for joke?", "ignore", "jest", "conduct", "jest"]
 Q6=["What's the synonym for smile?", "frown", "grin", "happy", "grin"]
 Q7=["What's the synoynm for wonderful?", "amazing", "smile", "warm", "amazing"]
 Q8=["What's the synonym for rubbish?", "spiders", "laundry", "trash", "trash"]
 Q9=["What's the synonym for jumped?", "hopped", "under", "bend", "hopped"]
 Q10=["What's the synonym for hungry?","empty", "starved", "angry", "starved"]
 Q11=["What's the synonym for large?", "kind", "great", "wonderful", "great"]
 Q12=["What's the synonym for leader?", "first", "speaker", "ruler", "ruler"]
 Q13=["What's the synonym for order?", "command", "test", "give", "command"]
 Q14=["What's the synonym for normal?", "small", "regular", "insane", "regular"]
 Q15=["What's the synonym for prove?", "trust", "know", "show", "show"]
 Q16=["What's the synonym for rescue?", "save", "swim", "murder", "save"]
 Q17=["What's the synonym for tremble?", "throw", "shake", "calm", "shake"]
 Q18=["What's the synonym for secret?", "find", "trith", "hidden", "hidden"]
 Q19=["What's the synonym for strange?", "odd", "sleepy", "wrong", "odd"]
 Q20=["What's the synonym for forgive?", "tell", "forget", "pardon", "pardon"]

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