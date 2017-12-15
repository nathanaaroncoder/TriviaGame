$(document).ready(function() {

var time = 101;
var intervalId;
var wrongAnswers = 0;
var rightAnswers = 0;
var unanswered = 0;


function startUp(){
	$("#main").hide();
}

startUp();


$("#start-button").click(function(){


	$("#main").show();
	$("#start-button").detach();


	
	function evaluate (){

		var answer1 = parseInt($('input[name=q1]:checked').val());
		console.log(answer1);
		
		var answer2 = parseInt($('input[name=q2]:checked').val());
		console.log(answer2);

		var answer3 = parseInt($('input[name=q3]:checked').val());
		console.log(answer3);

		var answer4 = parseInt($('input[name=q4]:checked').val());
		console.log(answer4);

		var answer5 = parseInt($('input[name=q5]:checked').val());
		console.log(answer5);

		var answer6 = parseInt($('input[name=q6]:checked').val());
		console.log(answer6);

		var answer7 = parseInt($('input[name=q7]:checked').val());
		console.log(answer7);

		var answer8 = parseInt($('input[name=q8]:checked').val());
		console.log(answer8);

		var answer9 = parseInt($('input[name=q9]:checked').val());
		console.log(answer9);

		var answer10 = parseInt($('input[name=q10]:checked').val());
		console.log(answer10);

		var answerValues = [];

		answerValues.push(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10);

		for (var i = 0; i < answerValues.length; i++) {
			if (answerValues[i] === 1){
				rightAnswers++;
			} else if (answerValues[i] === 0){
				wrongAnswers++;
			} else {
				unanswered++;
			}
		}
	
	}

	// EVERYTHING HERE IS FOR THE TIMER ------------------------------------
	function start (){
		intervalId = setInterval(countdown, 1000);
	}


	function countdown (){
		time--;
		$("#timer").html("<h2>" + time + " seconds left! </h2>");
		if(time === 0){
			evaluate();
			$("#main").html("<h1>Time's Up!</h1>" + "<h1>Let's see if you know your Stranger Things.</h1>" + "<p>Correct Answers: " + rightAnswers + "</p>" + "<p>Incorrect Answers: " + wrongAnswers + "</p>" + "<p>Not Answered: " + unanswered + "</p>")
			stop();


		}
	}

	start();

	function results(){
		$("#main").html("<h1>Let's see if you know your Stranger Things.</h1>" + "<p>Correct Answers: " + rightAnswers + "</p>" + "<p>Incorrect Answers: " + wrongAnswers + "</p>" + "<p>Not Answered: " + unanswered + "</p>")
	}

	function stop (){
		clearInterval(intervalId);
	}
	// --------------------------------------------------------------
	$("#submit-btn").click(function(){

			evaluate();
			results();
			stop();
			console.log("wrong: " + wrongAnswers);
			console.log("right: " + rightAnswers);
			console.log("not: " + unanswered);

	})


})








})