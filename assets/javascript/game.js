//Create global variables
// alert("Javascript is working!");

var targetScore = 0;
var userScore = 0;
var wins = 0;
var losses = 0;
var randomNumber = 0;
var score = 0;
var crystalPoints = 0;
var previousNumber = 0;
var num

// randomNumber = generateRandom();

function generateRandom(){
    
    randomNumber = Math.floor(Math.random() * 12)+ 1;
    
    if(randomNumber === previousNumber){
        generateRandom();
    }
    previousNumber = randomNumber;
    // console.log("The point assignment is " + randomNumber);
    return randomNumber;
    // console.log(randomNumber);
}
//Create a function on page load that creates random number to hit,
//generates random crystal values; assigns crytal values to crystals;
//one of the function needs to generate random number; 
$(document).ready(function() {
    targetScore = (Math.floor(Math.random()* 100 + 19 ));
    console.log("The random number is: " + targetScore);
    
    $("#random-number").text(targetScore);

})


//Object array that stores images and calls function to create point per Crystal.

var crystalList = [{ imgSrc: "assets/images/citrine.jpg", 
crystalPoints: generateRandom()},
{imgSrc: "assets/images/lepidolite.jpg",
crystalPoints: generateRandom()},
{imgSrc: "assets/images/rhodochrosite.jpg",
crystalPoints: generateRandom()},
{imgSrc:  "assets/images/shattuckite.jpg",
crystalPoints: generateRandom()}]
// object would have a score, an image a pointer to the crystal image, aka collection of key value pairs. it would be an array of objects


   for(var i = 0; i < crystalList.length; i++){
        var imgSrc = crystalList[i].imgSrc
        var crystalPoints = crystalList[i].crystalPoints
        
        $(".image-holder").append("<img src=" + imgSrc + " width='150px' onclick='scoreKeeper(" + crystalPoints + ");'>");
   
    }

    function scoreKeeper(score){
        userScore = score + userScore;
        console.log("The score is: " + userScore);
        $(".yourScore").text(userScore);
    }





















//Crystal Collector
//every-time page loads target score has a value
//the crystals have an assigned value
//what variables will I need
//return is a keyword. crystal values need to change every game.
//all four crystals have the same class
//how to differieniate between the class
//data-attribute data-crystalValue
//create an array of objects



// a click event; start/reset function a game
//when writing code don't repeat yourself (dry) and make it reusable
//DOM manipulation methods .html for targetScore

//Global Variables:
//wins, losses, target score, your score
// var score = yourScore + crystalValue;
//array of crystals loop through dynamically create, the photo use an object, each crystal has multiple pieces of information

    




//Random Number Function:

    //assign a value for each crystal


// Click event function


//start/reset game (call this function in  an opportune space)
    //clear out variables for or foreach
    //set target score//assign a value for each crystal
    // if yourScore is greater than target score,
    // if yourScore 