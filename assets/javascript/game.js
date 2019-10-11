// Assigning variable
let hero1 = Math.floor(Math.random() * (12 - 1)) +1;
let hero2 = Math.floor(Math.random() * (12 - 1)) +1;
let hero3 = Math.floor(Math.random() * (12 - 1)) +1;
let hero4 = Math.floor(Math.random() * (12 - 1)) +1;
let randomScore = Math.floor(Math.random() * (120 - 19 )) +19;
console.log(hero1);
console.log(hero2);
console.log(hero3);
console.log(hero4);
console.log(randomScore);

let userScore = 0;
let wins = 0;
let losses = 0;


$(document).ready(function(){
    
    $(".number").text(randomScore);
    $(".wins").text(wins);
    $(".losses").text(losses);
    
    
    

    $("#hero1").on("click", function(){
        userScore = hero1 + userScore;
        console.log(userScore);
        checkScore()
    })

    $("#hero2").on("click", function(){
        userScore = hero2 + userScore;
        console.log(userScore);
        checkScore()
    })
    $("#hero3").on("click", function(){
        userScore = hero3 + userScore;
        console.log(userScore);
        checkScore()
    })

    $("#hero4").on("click", function(){
        userScore = hero4 + userScore;
        console.log(userScore);
        checkScore()

    })
   
    // Function to call on to check the status of the game after every click of a gem
    function checkScore(){
        $(".your-number").text(userScore);
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
        (console.log(randomScore))
         userScore = 0;
         hero1 = Math.floor(Math.random() * (12 - 1)) +1;
         hero2 = Math.floor(Math.random() * (12 - 1)) +1;
         hero3 = Math.floor(Math.random() * (12 - 1)) +1;
         hero4 = Math.floor(Math.random() * (12 - 1)) +1;
         
         $(".number").text(randomScore);
         $(".wins").text(wins);
         $(".losses").text(losses);
         $(".your-number").text(userScore);
    }
    
    
    


})










