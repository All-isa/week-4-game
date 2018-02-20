//variables 
var wins = 0;
var losses = 0;
var result = 0;
// var result = 0;

//taking random number from the computer 
var randomNum = parseInt(Math.floor(Math.random() * 101) + 19);
$("#randomNum").text(randomNum);

//converting the random string into integers
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
// ========================================================

//function to reset the game if the user loses or wins
function reset() {
    score = 0;
    $(".result").html("Your Score is : "+result);
    randomNum = parseInt(Math.floor(Math.random() * 101) + 19);
    $(".randomNumber").html(randomNum);
    gem1 = parseInt(Math.floor(Math.random() * 12) + 1);
    gem2 = parseInt(Math.floor(Math.random() * 12) + 1);
    gem3 = parseInt(Math.floor(Math.random() * 12) + 1);
    gem4 = parseInt(Math.floor(Math.random() * 12) + 1);
}


$(document).ready(function() {
//onclick event for the images
    $(".gemstone").on("click", function() {
        if ($(this).attr("class") === "gemstone") {
            if ($(this).attr("id") === "gem1") {
                result = parseInt(result) + parseInt(gem1);
            }
            if ($(this).attr("id") === "gem2") {
                result = parseInt(result) + parseInt(gem2);
            }
            if ($(this).attr("id") === "gem3") {
                result = parseInt(result) + parseInt(gem3);
            }
            if ($(this).attr("id") === "gem4") {
                result = parseInt(result) + parseInt(gem4);
            }
            
        }
        console.log("final score on click " + result);
        $("#result").html("Your Score is : " + result);

        //increase the win or lost counter by 1 depending on the result
        if (result === randomNum) {
            wins++;
            console.log("You win : " + wins);
            $("#wins").html("You Win!!");
            $("#wins").html("Won :"+wins);
            reset();
        } else if (result > randomNum) {
            lost++;
            console.log("lost : " + losses);
            $("#wins").html("Try Again!!");
            $("#losses").html("Lost :"+losses);
            reset();
        }
    })

});