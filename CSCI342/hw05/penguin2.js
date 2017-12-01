
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

    var penguinNum ;
    var numPenguins = document.getElementById("penguinNum").value;
    var numPenguins = 16;
    console.log($("#penguinNum"));
    var origStyleSheet = document.styleSheets[0];

    var yeti = document.createElement("div");
    yeti.setAttribute("id", "yeti");
    // var yetiNum = getRandomInt(0, numPenguins);
    var yetiNum = 1;
    var penguin;

    // yeti is placed if penguinNum == 9, then maxNum--
    for (var i = 0; i < numPenguins; i++){
        if (i != yetiNum){
            penguinNum = getRandomInt(1, 9);
            $('#gameholder').append($('<img />', {
                class: ("penguin" + penguinNum.toString()),
                src: "images/mound_" + penguinNum.toString() + ".png",
                onmouseover: "toHoverImage(this)"
            }));
        }else{
            $('#gameholder').append($('<img />', {
                class: ("yeti"),
                src: "images/mound_" + getRandomInt(1, 9) + ".png",
                onmouseover: "toHoverImage(this)"
            }));
        }
    }
    
    var penguinString;
    // for (var i = 1; i <= 9; i++){
    //     penguinString = ".penguin" + i.toString();
    //     console.log(penguinString);
    //     console.log("url('images/penguin_" + i.toString() + ".png')");
    //     $(penguinString).mousedown(
    //         $(penguinString).css("background-image", ("url('images/penguin_" + i.toString() + ".png')"))
    //     );
    // }

    // var backgroundImage = window.getComputedStyle(
    //     document.querySelector('.penguin1'), ':active'
    // ).getPropertyValue('background-image');
    // console.log(backgroundImage);
    
    // var penguinName;
    // var hoverImages = new Array();
    // var moundImages = new Array();
    // for (var i = 0; i < 8; i++){
    //     penguinName = '.penguin' + (i + 1).toString();
    //     if ($(penguinName).length){
    //         hoverImages.push(window.getComputedStyle(
    //             document.querySelector(penguinName), ':hover'
    //         ).getPropertyValue('background-image'));
    //         // hoverImages[i] = hoverImages[i].match
    //         console.log(hoverImages[i]);
    //         moundImages.push($(penguinName).css('background-image'));
    //         console.log(moundImages[i]);
    //     }
    // } 

    var pengString;
    $("div[class*='penguin']").on("click", function(){
        pengString = $(this).attr('class');
        console.log(pengString);
        penguinNum = pengString.match(/\d ?/);
        $(this).css("background-image", "url('images/penguin_" + penguinNum + ".png')");
    }); 
    
    $("#yeti").mousedown(function(){
        setTimeout(function(){
            alert("Yaaaarrrr!");
        }, 50);
        for(var i = 0; i < 8; i++){
            penguin = $('.penguin' + (i + 1).toString());
            if (penguin.length){
                penguinNum = penguin.attr('class')
                penguin.css("background-image")
            }
        }
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

function toHoverImage(element){
    console.log(element);
}

