$(document).ready(function(){
    var animals = ["Animal1", "Animal2", "Animal3"];
    
    for (var i = 0; i < animals.length; i++) {
        var newButton = $('<button>');
        newButton.addClass('animButton');
        newButton.attr('data-name', animals[i]);
        newButton.text(animals[i]);
        $("#buttons").append(newButton);
        
        console.log(animals[i]);
    };
    
    $(document).on('click', '#buttons', function(){
        var animalName = $(this).attr('data-name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC";
//        $.ajax(url: queryURL, method: 'GET'){
//            
//        }
        
        console.log(animalName);
        console.log(queryURL);
    });
});