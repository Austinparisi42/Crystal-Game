$(document).ready(function() {

// variables

var randomTargetNumber = Math.floor(Math.random() * (120-19) + 19);

var numberOptions = [];

var counter = 0;

var wins = 0;

var losses = 0;

// var goku = $(".gokuImg");

// var frieza = $(".friezaImg");

// var buu = $(".buuImg");

// var guldo = $(".guldoImg");

// display target

console.log(randomTargetNumber);

// for(var i = 0; i < 4; i++) {
// 	numberOptions.push(Math.floor(Math.random() * (5-4) + 19))
// }
// give buttons number

randomNumbers();

function reset() {
	randomTargetNumber = Math.floor(Math.random() * (120-19) + 19);
	console.log(randomTargetNumber);
	randomNumbers();
	console.log(numberOptions);
	$("#targetNumber").html("<span>" + randomTargetNumber + "</span>");
	counter = 0;
	$("#scoreDisplay").html("<span>" + counter + "</span>");

	};

$(".gokuImg").attr("data-gokuvalue", numberOptions[0]);
$(".friezaImg").attr("data-friezavalue", numberOptions[1]);
$(".buuImg").attr("data-buuvalue", numberOptions[2]);
$(".guldoImg").attr("data-guldovalue", numberOptions[3]);

// reset



// win

function win() {
	alert("You win!");
	wins++;
	$("#win").html("Wins: " + wins);
	reset();
};

// lose

function lose() {
	alert("You lose!");
	losses++;
	$("#loss").html("Losses: " + losses);
	reset();
};

// function for fighters random numbers

function randomNumbers() {
	for(i = 0; numberOptions.length < 4; i++) {
		var pickNumber = Math.floor(Math.random() * (12 - 1) + 1);
		console.log(pickNumber);

		if(numberOptions.indexOf (pickNumber) < 0){
			numberOptions.push(pickNumber);
			
		}

	}
};

// diplay target
randomNumbers();
console.log(numberOptions);
$("#targetNumber").html("<span>" + randomTargetNumber + "</span>");

// clicks

$(".gokuImg").on ('click', function(){
    var gokuValue = ($(this).attr("data-gokuvalue"));
    gokuValue = parseInt(gokuValue);
    counter += gokuValue;
    $("#scoreDisplay").html("<span>" + counter + "</span>");
    if (counter === randomTargetNumber) {
      
      win();
    }

    else if (counter >= randomTargetNumber) {
      
      lose();
    }
	
	});

$(".friezaImg").on ('click', function(){
    var friezaValue = ($(this).attr("data-friezavalue"));
    friezaValue = parseInt(friezaValue);
    counter += friezaValue;
    $("#scoreDisplay").html("<span>" + counter + "</span>");
    if (counter === randomTargetNumber) {
      
      win();
    }

    else if (counter >= randomTargetNumber) {
      
      lose();
    }
	
	});


$(".buuImg").on ('click', function(){
    var buuValue = ($(this).attr("data-buuvalue"));
    buuValue = parseInt(buuValue);
    counter += buuValue;
    $("#scoreDisplay").html("<span>" + counter + "</span>");
    if (counter === randomTargetNumber) {
      
      win();
    }

    else if (counter >= randomTargetNumber) {
      
      lose();
    }
	
	});

$(".guldoImg").on ('click', function(){
    var guldoValue = ($(this).attr("data-guldovalue"));
    guldoValue = parseInt(guldoValue);
    counter += guldoValue;
    $("#scoreDisplay").html("<span>" + counter + "</span>");
    if (counter === randomTargetNumber) {
      
      win();
    }

    else if (counter >= randomTargetNumber) {
      
      lose();
    }
	
	});












});