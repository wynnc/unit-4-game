var targetScore = 0
	var yourScore = 0
	var wins = 0
	var losses = 0
	var randomNumber = 0
	
	randomNumber = generateRandom();
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
	    randomNumber = Math.floor(Math.random() * 10)+ 1;
	    console.log(randomNumber);
	
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
	// $(document).ready(function() {
	    targetScore = (Math.floor(Math.random()* 100 + 19 ));
	//     console.log("The random number is: " + randomNumber);
	    console.log("The target number is: " + targetScore);
	
	    $("#randomNumber").text("Number: " + targetScore);
	
	// })
	
	
	
	//Object array that stores images and calls function to create point per Crystal.
	
	var crystalList = [{ imgSrc: "assets/images/citrine.jpg", 
	// score: Math.floor(Math.random() * 10)+ 1},
	crystalPoints: generateRandom()},
	{imgSrc: "assets/images/lepidolite.jpg",
	// score: randomNumber},
	crystalPoints: generateRandom()},
	{imgSrc: "assets/images/rhodochrosite.jpg",
	// score: randomNumber},
	crystalPoints: generateRandom()},
	{imgSrc:  "assets/images/shattuckite.jpg",
	// score: randomNumber}]
	crystalPoints: generateRandom()}]
	// object would have a score, an image a pointer to the crystal image, aka collection of key value pairs. it would be an array of objects
	
	
	   for(var i = 0; i < crystalList.length; i++){
	        var imgSrc = crystalList[i].imgSrc
	        // var score = crystalList[i].score
	
	        // $(".image-holder").append("<img src=" + imgSrc + " width='150px'>");
	        var crystalPoints = crystalList[i].crystalPoints
	        
	        $(".image-holder").append("<img src=" + imgSrc + " width='150px' onclick='scoreKeeper(" + crystalPoints + ");'>");
	
	    }
	
        function scoreKeeper(score) {
            userScore = score + userScore;
            // console.log("The score is: " + userScore);
            $(".yourScore").text(userScore);
            if (userScore === targetScore) {
                wins++;
                $(".wins").text("Wins: " + wins);
                reset();
            } else if (userScore > targetScore) {
                losses++;
                $(".losses").text("Losses: " + losses);
                reset();
            }
        }
        function reset() {
            // console.log("this value should be " + isLoaded);
            targetScore = (Math.floor(Math.random() * 100 + 19));
            userScore = 0;
            $(".yourScore").text(userScore);
            console.log("The random number is: " + targetScore);
        
            $("#random-number").text(targetScore);
        
            for(var i = 0; i < $(".image.holder").length; i++){
                $(this).attr("data-crystalValue", generateRandom());
                console.log($(this).attr("data-crystalValue"));
            }
        }