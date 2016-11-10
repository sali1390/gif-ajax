$(document).ready(function(){
    var animals = ["T-Rex", "Stegosaurus", "Raptor", "Triceratops", "Stegosaurus", "Pterodactyl", "Dilophosaurus", "Brachiosaurus", "Pteranodon", "Troodon", "Apatosaurus",];
    
//    var ratings, displayRating, imageUrlStil, imageUrlMotion, displayImageUrl
    
    function generateButtons() {
        $("#buttons").empty();
        
        for (var i = 0; i < animals.length; i++) {
            //Create a new button
            var newButton = $('<button>');
            //Adds new class
            newButton.addClass('btn btn-default animButton centered');
            //Adds custom attribute
            newButton.attr('data-name', animals[i]);
            //Adds the item in the array as the text
            newButton.text(animals[i]);
            //Appends the button within the buttons div
            $("#buttons").append(newButton);
            //Assign the click event
            newButton.on('click', showGifs);

//            console.log(animals[i]);
        };
    }
    
    //function call to generate buttons
    generateButtons();
    
    //Function to carry out the Ajax call and show the gifs
    function showGifs() {
        $("#displayGifsHere").empty();
        
        var animalName = $(this).attr('data-name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({url: queryURL, method: 'GET'}).done(function(response){
            var results = response.data;
            
            console.log(response.data);
            
            for (var i = 0; i < results.length; i++) {
                var rating = results[i].rating;
                
                var displayRating = $('<p>').attr('class', 'rating').text('Rating: ' + rating);
                
                var imageUrlStill = results[i].images.fixed_height.url;
                
                var displayImageUrl = $('<img>').attr('class', 'imageUrl').attr('src', imageUrlStill);
                
                $("#displayGifsHere").append(displayRating).append(displayImageUrl);
                
//                console.log(rating);
            };
            
//            $(".imageUrl").on('click', function(){
//                var imageUrlMotion = images.fixed_height.url;
//
//                $(".imageUrl").attr('src', imageUrlMotion);
//            })
        
        });
    };
    
    $("#submitAnimal").on("click", function() {
        var newCat = $("#searchBar").val().trim();
        
        animals.push(newCat);
        
        generateButtons();
    
        console.log(animals);
        
        $("#searchBar").val("");
    });
});