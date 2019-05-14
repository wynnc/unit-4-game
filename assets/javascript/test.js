var crystalList = [
    {
        imgSrc: "assets/images/citrine.jpg",
    },
    {
        imgSrc: "assets/images/lepidolite.jpg"
    }
    // crystalPoints: generateRandom()
]

$(document).ready(function() {
    // $(".image-holder").on("click", function() {
    //     alert("you clicked the citirine");
    // });
    for (var i = 0; i < crystalList.length; i++){
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("id", "img" + i)
        imageCrystal.attr("src", crystalList[i].imgSrc);
        imageCrystal.attr("alt", "citrine image");
       
        $(".image-holder").append(imageCrystal);

    }
})

$("#img").on("click", function() {
    alert("image: " + i)
}) 