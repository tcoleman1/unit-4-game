$(document).ready(function () {

    var total = 0;
    var wins = 0;
    var losses = 0;
 
var randomNumber = Math.floor(Math.random() * 101) + 19;

 console.log(randomNumber);

 $("#randomNumber").text(randomNumber);


    var numberOne = Math.floor(Math.random() * 11) + 1;
    var numberTwo = Math.floor(Math.random() * 11) + 1;
    var numberThree = Math.floor(Math.random() * 11) + 1;
    var numberFour = Math.floor(Math.random() * 11) + 1;

    

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

});

function reset () {

    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("randomNumber").text(randomNumber);
    var numberOne = Math.floor(Math.random() * 11) + 1;
    var numberTwo = Math.floor(Math.random() * 11) + 1;
    var numberThree = Math.floor(Math.random() * 11) + 1;
    var numberFour = Math.floor(Math.random() * 11) + 1;

    total = 0;
    $("#score").text(total);

}

// Need to add number of wins to the total score "score"

function won () {
    alert( "Congratulations you won!");

    win++;
    $("#numberWins").text(wins);

    reset();
}

function loss () {

    alert("Sorry you've loss");
    losses++;
    $("#numberLosses").text(losses);

    reset();
}

$("#crystal1").on("click", function () {

    total = total + numberOne;

    $("#score").text(total);

    if(total === randomNumber){

        won();
    }

    else if (total > randomNumber){
        loss ();
    }
});

$("#crystal2").on("click", function () {

    total = total + numberTwo;

    $("#score").text(total);

    if(total === randomNumber){

        won();
    }

    else if(total > randomNumber) {
        loss ();
    }

})

$("#crystal3").on("click", function () {

    total = total + numberThree;

    $("#score").text(total);

    if(total === randomNumber){

        won();
    }

    else if (total > randomNumber){
        loss ();
    }

})

$("#crystal4").on("click", function () {

    total = total + numberFour;

    $("#score").text(total);

    if(total === randomNumber){

        won();
    }

    else if (total > randomNumber){
        loss ();
    }
});

