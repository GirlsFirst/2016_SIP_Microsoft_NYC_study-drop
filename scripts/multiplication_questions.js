Q1=["What's 1x1?", "6", "1", "2", "1"]
Q2=["What's 1x2?", "7", "3", "2", "2"]
Q3=["What's 1x3?", "2", "4", "3", "3"]
Q4=["What's 1x4?", "2", "4", "1", "4"]
Q5=["What's 1x5?", "3", "6", "5", "5"]
Q6=["What's 1x6?", "6", "1", "7", "6"]
Q7=["What's 1x7?", "0", "3", "7", "7"]
Q8=["What's 1x8?", "1", "8", "5", "8"]
Q9=["What's 1x9?", "9", "3", "7", "9"]
Q10=["What's 1x10?", "1", "12", "10", "10"]
Q12=["What's 1x11?", "12", "11", "7", "11"]
Q13=["What's 1x12?", "9", "12", "44", "12"]
Q14=["What's 2x1?", "5", "0", "2", "2"]
Q15=["What's 2x2?", "4", "9", "1", "4"]
Q15=["What's 2x3?", "8", "4", "6", "6"]
Q16=["What's 2x4?", "0" ,"8" ,"1" ,"8"]
Q17=["What's 2x5?", "1", "10", "0", "10"]
Q18=["What's 2x6?", "12", "7", "15", "12"]
Q19=["What's 2x7?", "8", "14" ,"16", "14"]
Q20=["What's 2x8?", "19", "2", "16", "16"]
Q21=["What's 2x9?", "12", "18", "7" ,"18"]
Q22=["What's 2x10", "2", "15" ,"20", "20"]
Q23=["What's 2x11?", "21", "0", "12", "21"]
Q24=["What's 2x12?", "8", "24", "18", "24"]
Q25=["What's 3x1?", "7", "1", "3", "3"]
Q26=["What's 3x2?", "6", "0", "12", "6"]
Q27=["What's 3x3?", "21", "7", "9", "9"]
Q28=["What's 3x4?", "16", "12", "7", "12"]
Q29=["What's 3x5?", "18", "15", "1","15"]
Q30=["What's 3x6?", "18", "12", "5", "18"]
Q31=["What's 3x7?", "6", "21", "28", "21"]
Q32=["What's 3x8?", "16", "86", "24", "24"]
Q33=["What's 3x9?", "27", "62", "98", "27"]
Q34=["What's 3x10?", "723", "8", "36", "30"]
Q35=["What's 3x11?", "33", "98", "73", "33"]
Q36=["What's 3x12?", "49", "76", "36", "36"]
Q37=["What's 4x1?", "0", "73", "4", "4"]
Q38=["What's 4x2", "8", "26", "18", "8"]
Q39=["What's 4x3?", "86", "4", "12", "12"]
Q40=["What's 4x4?", "74", "16", "1", "16"]
Q41=["What's 4x5?", "9", "20", "0", "20"]
Q42=["What's 4x6?", "63", "74", "24", "24"]
Q43=["What's 4x7?", "28", "74", "78", "28"]
Q44=["What's 4x8?", "23", "29", "32", "32"]
Q45=["What's 4x9?", "6", "54", "36", "36"]
Q46=["What's 4x10?", "86", "26", "40", "40"]
Q47=["What's 4x11?", "8", "44", "2357", "44"]
Q48=["What's 4x12?", "73", "1", "48", "48"]
Q49=["What's 5x1?", "5", "2", "10", "5"]
Q50=["What's 5x2?", "10", "62", "72", "10"]
Q51=["What's 5x3?", "64", "15", "0", "15"]
Q52=["What's 5x4?", "1", "32", "20", "20"]
Q53=["What's 5x5?", "57", "25", "8", "25"]
Q54=["What's 5x6?", "30", "53", "2", "30"]
Q55=["What's 5x7?", "72", "2", "35", "35"]
Q56=["What's 5x8?", "0", "40", "48", "40"]
Q57=["What's 5x9?", "45", "73", "58", "45"]
Q58=["What's 5x10?", "87", "84", "50", "50"]
Q59=["What's 5x11?", "55", "1", "13", "55"]
Q60=["What's 5x12?", "24", "60", "67", "60"]


var Multiplication3 =[Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34, Q35, Q36, Q37, Q38, Q39, Q40, Q41, Q42, Q43, Q44, Q45, Q46, Q47, Q48, Q49, Q50, Q51, Q52, Q53, Q54, Q55, Q56, Q57, Q58, Q59, Q60]
var index;
var score = 0;
var times_shown = 0;


function mouseClick(){
	index = Math.floor((Math.random()*Multiplication3.length)+0);
	document.getElementById('question').innerHTML=Multiplication3[index][0];
	document.getElementById('choice1').innerHTML=Multiplication3[index][1];
	document.getElementById('choice2').innerHTML=Multiplication3[index][2];
	document.getElementById('choice3').innerHTML=Multiplication3[index][3];

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

	if (userchoice == Multiplication3[index][4]) {
		console.log(index);
		console.log(Multiplication3[index][4]);
		console.log(userchoice);
		document.getElementById('results').innerHTML = "Correct!"
		score++;
		document.getElementById('change').innerHTML = "Questions answered correctly: " + score;
		console.log('score has been changed');

	}
	else if (userchoice != Multiplication3[index][4]) {
		console.log(index);
		console.log(Multiplication3[index][4]);
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





























