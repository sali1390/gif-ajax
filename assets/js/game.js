$(document).ready(function(){
    var animals = ["cats", "dogs", "turtles"];
    
    function generateButtons() {
        for (var i = 0; i < animals.length; i++) {
            //Create a new button
            var newButton = $('<button>');
            //Adds new class
            newButton.addClass('animButton');
            //Adds custom attribute
            newButton.attr('data-name', animals[i]);
            //Adds the item in the array as the text
            newButton.text(animals[i]);
            //Appends the button within the buttons div
            $("#buttons").append(newButton);
            //Assign the click event
            newButton.on('click', showGifs);

            console.log(animals[i]);
        };
    }
    
    //function call to generate buttons
    generateButtons();
    
    //Function to carry out the Ajax call and show the gifs
    function showGifs() {
        var animalName = $(this).attr('data-name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=2";
        $.ajax({url: queryURL, method: 'GET'}).done(function(response){
            for (var i = 0; i < 9; i++) {
                var rating = response.data.rating;
                var imageUrl = response.data.images.fixed_height.url;
                
                console.log(rating);
                console.log(imageUrl);
            };
            
            console.log(response);
        });
        
        console.log(animalName);
        console.log(queryURL);
    };
});