var wins = 0;
var losses = 0;
var result = 0 ;
var randomNum ;

var gemOne = parseInt(Math.floor(Math.random() * 12) + 1);
var gemTwo = parseInt(Math.floor(Math.random() * 12) + 1);
var gemThree = parseInt(Math.floor(Math.random() * 12) + 1);
var gemFour = parseInt(Math.floor(Math.random() * 12) + 1);

//Test display
// =======================================================
console.log("randomNum: " + randomNum);
console.log("gemOne: " + gemOne);
console.log("gemTwo: " + gemTwo);
console.log("gemFour: " + gemThree);
console.log("gemThree: " + gemFour);
console.log("**********************");
// =======================================================

function initializeGame()    {
//  var randomNum = parseInt(Math.floor(Math.random() * 102) + 19);
//  $("#randomNum").text(randomNum);

//    var gemOne = parseInt(Math.floor(Math.random() * 12) + 1);
//    var gemTwo = parseInt(Math.floor(Math.random() * 12) + 1);
 //   var gemThree = parseInt(Math.floor(Math.random() * 12) + 1);
 //   var gemFour = parseInt(Math.floor(Math.random() * 12) + 1);
    var result = 0;
    randomNum = parseInt(Math.floor(Math.random() * 102) + 19);

    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#result").html(result);
    $("#randomNum").html(randomNum);
    
}

function userWinOrLose()    {
    if (result > randomNum) {
        losses++;
        console.log("user lost");
    //    alert("You lost! Try again.");
        initializeGame();
    }

    if (result === randomNum) {
        wins++;
        console.log("user won");
    //    alert("You won! Great job. Best out of 5?");
        initializeGame();
    }
}

initializeGame();

var randomNum = parseInt(Math.floor(Math.random() * 102) + 19);

$("#randomNum").text(randomNum);


$(".gemstone").on("click", function()   {
    var pressed = $(this).attr("value");
    console.log(result)

    if (pressed == "gemOne") {
        result = result + gemOne;
    } else if (pressed == "gemTwo") {
        result= result + gemTwo;
    } else if (pressed == "gemThree") {
        result = result + gemThree;
    } else if (pressed == "gemFour") {
        result = result + gemFour;
    } else {
        console.log("error");
    }

    $("#result").html(result);

    userWinOrLose();

})
