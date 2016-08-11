Q1=["What's 3+0?", "3", "7", "4", "3"]
Q2=["What's 6+2?", "7", "8", "5", "8"]
Q3=["What's 4+5?", "8", "6", "9", "9"]
Q4=["What's 5+4?", "9", "3", "7", "9"]
Q5=["What's 2+2?", "6", "4", "5", "4"]
Q6=["What's 0+7?", "5", "7", "9", "7"]
Q7=["What's 1+3?", "4", "9", "3", "4"]
Q8=["What's 6+3?", "3", "4", "9", "9"]
Q9=["What's 8+0?", "2", "6", "8", "8"]
Q10=["What's 7+0?", "3", "9", "7", "7"]
Q11=["What's 2+1?", "3", "2", "7", "3"]
Q12=["What's 4+0?", "2", "4", "8", "4"]
Q13=["What's 7+2?", "4", "2", "9", "9"]
Q14=["What's 1+2?", "3", "5", "7", "3"]
Q15=["What's 4+1?", "3", "5", "7", "5"]
Q16=["What's 4+0?", "2", "4", "9", "4"]
Q17=["What's 3+3?", "6", "4", "3", "6"]
Q18=["What's 2+7?", "4", "7", "9", "9"]
Q19=["What's 6+0?", "4", "6", "2", "6"]
Q20=["What's 0+7?", "5", "7", "2", "7"]
Q21=["What's 7+1?", "8", "5", "2", "8"]
Q22=["What's 3+1?", "2", "7", "4", "4"]
Q23=["What's 5+3?", "8", "4", "7", "8"]
Q24=["What's 0+2?", "5", "7", "2", "2"]
Q25=["What's 5+2?", "7", "9", "3", "7"]
Q26=["What's 8+1?", "5", "9", "4", "9"]
Q27=["What's 2+3?", "6", "1", "5", "5"]
Q28=["What's 0+8?", "1", "4", "8", "8"]
Q29=["What's 3+4?", "2", "7", "5", "7"]
Q30=["What's 6+1?", "6", "1", "7", "7"]
Q31=["What's 0+0?", "4", "5", "0", "0"]
Q32=["What's 9+0?", "3", "5", "9", "9"]
Q33=["What's 1+1?", "6", "8", "2", "2"]
Q34=["What's 6+3?", "6", "5", "9", "9"]
Q35=["What's 4+2?", "5", "6", "2", "6"]
Q36=["What's 2+4?", "6", "5", "8", "6"]
Q37=["What's 2+6?", "5", "9", "8", "8"]
Q38=["What's 3+5?", "3", "8", "1", "8"]
Q39=["What's 2+7?", "2", "9", "1", "9"]
Q40=["What's 4+4?", "2", "8", "1", "8"]
Q41=["What's 1+4?", "1", "8", "5", "5"]
Q42=["What's 5+0?", "4", "9", "5", "5"]
Q43=["What's 1+6?", "7", "9", "1", "7"]
Q44=["What's 3+6?", "1", "9", "4", "9"]
Q45=["What's 0+7?", "2", "7", "1", "7"]

var Addition3 =[Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34, Q35, Q36, Q37, Q38, Q39, Q40, Q41, Q42, Q43, Q44, Q45]

function mouseClick(){
	var index = Math.floor((Math.random()*Addition3.length)+0);
	document.getElementById('question').innerHTML =Addition3[index][0];
	document.getElementById('choice1').innerHTML=Addition3[index][1];
	document.getElementById('choice2').innerHTML=Addition3[index][2];
	document.getElementById('choice3').innerHTML=Addition3[index][3];

//console.log(document.getElementById('choice1').innerHTML);

	if (document.getElementById('radio1').checked){
		console.log("the first radio button is pressed");
		console.log("we are printing out the correct answer: " + Addition3[index][4]);
	if(document.getElementById('choice1').innerHTML==Addition3[index][4]){
		console.log("you chose the correct answer: ");
		console.log("the correct answer is: " + document.getElementById('choice1').innerHTML);
    	
    	}
	
}
	if (document.getElementById('radio2').checked){
	console.log("the second radio button is pressed");
	console.log("we are printing out the correct answer: " + Addition3[index][4]);
	if(document.getElementById('choice2').innerHTML==Addition3[index][4]){
		console.log("you chose the correct answer: ");
		console.log("the correct answer is: " + document.getElementById('choice2').innerHTML);
		
	}
	
}
	if (document.getElementById('radio3').checked){
	console.log("the third radio button is pressed");
	console.log("we are printing out the correct answer: " + Addition3[index][4]);
	if(document.getElementById('choice3').innerHTML==Addition3[index][4]){
		console.log("you chose the correct answer: ");
		console.log("the correct answer is: " + document.getElementById('choice3').innerHTML);
		
	}

}

document.getElementById('btn').addEventListener('click', function() {
      ["radio1", "radio2", "radio3"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
      return false;
    })
}
