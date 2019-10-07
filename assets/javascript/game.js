// Assigning variable
let pinkcrys = Math.floor(Math.random() * (12 - 1)) +1;
let greencrys = Math.floor(Math.random() * (12 - 1)) +1;
let yellowcrys = Math.floor(Math.random() * (12 - 1)) +1;
let purplecrys = Math.floor(Math.random() * (12 - 1)) +1;
let randomScore = Math.floor(Math.random() * (120 - 19 )) +19;
console.log(pinkcrys);
console.log(greencrys);
console.log(yellowcrys);
console.log(purplecrys);
console.log(randomScore);

let userScore = 0;
let wins = 0;
let losses = 0;


// Game start

$(document).ready(function(){
    
    $(".number").text(randomScore);

    $(".crys1").on("click", function(){
        userScore = pinkcrys + userScore;
        console.log(userScore);
        checkScore()
    })

    $(".crys2").on("click", function(){
        userScore = greencrys + userScore;
        console.log(userScore);
        checkScore()
    })
    $(".crys3").on("click", function(){
        userScore = yellowcrys + userScore;
        console.log(userScore);
        checkScore()
    })

    $(".crys4").on("click", function(){
        userScore = purplecrys + userScore;
        console.log(userScore);
        checkScore()

    })
   
    // Function to call on to check the status of the game after every click of a gem
    function checkScore(){
        $(".user-score").text(userScore);
        if(userScore === randomScore){
            wins++;
            console.log(wins)
            $(".wins").text(wins) + "Wins: ";
            restartGame()
        } if (userScore > randomScore){
            losses++;
            restartGame()
        console.log(losses)
        $(".losses").text(losses) + "Losses: ";
        }
    }
    // Function to restart the game in the event of a win or a loss
    function restartGame(){
        randomScore = Math.floor(Math.random() * (120 - 19 )) +19;

         userScore = 0;
         pinkcrys = Math.floor(Math.random() * (12 - 1)) +1;
         greencrys = Math.floor(Math.random() * (12 - 1)) +1;
         yellowcrys = Math.floor(Math.random() * (12 - 1)) +1;
         purplecrys = Math.floor(Math.random() * (12 - 1)) +1;
         
         $(".number").text(randomScore);
         $(".wins").text(wins);
         $(".losses").text(losses);
         $(".user-score").text(userScore);

    }
    
    
    


})










