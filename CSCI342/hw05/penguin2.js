
// //This code will run after your page loads
// console.log("Test");
// document.getElementById("yeti").addEventListener("click", myFunction);

// myFunction(){
//     alert("Yaaaarrrr!");
// };
"use strict";

$(document).ready(function(){
    console.log("lets do this");
    for (var i = 2; i <= 64; i++){
        $('#penguinNum').append($('<option>', {
            value: i,
            text: i.toString()
        }));
    }
    startGame();
});

function startGame(){

    $("div*[class*='penguin']").remove();
    $("#yeti").remove();
    var penguinNum;
    var numPenguins = document.getElementById("penguinNum").value;
    var penguinsFound = 0;

    var yetiNum = getRandomInt(0, numPenguins);

    for (var i = 0; i < numPenguins; i++){
        if (i != yetiNum){
            penguinNum = getRandomInt(1, 9);
            $('#gameholder').append($('<div>', {
                class: ("penguin" + penguinNum.toString())
            }));
        }else{
            $('#gameholder').append($('<div>', {
                id: ("yeti")
            }));
        }
    }

    $("div*[class*='penguin']").mousedown(function(){
        $(this).addClass('active');
    });
    
    $("#yeti").mousedown(function(){
        setTimeout(function(){
            alert("Yaaaarrrr!");
        }, 50);
        $("div[class*='penguin']").removeClass('active');
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

function toActive(element){
    element.addClass("active");
}

