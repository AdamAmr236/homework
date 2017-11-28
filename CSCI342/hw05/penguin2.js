
// //This code will run after your page loads
// console.log("Test");
// document.getElementById("yeti").addEventListener("click", myFunction);

// myFunction(){
//     alert("Yaaaarrrr!");
// };
"use strict";

$(document).ready(function(){
    var penguinNum;
    var numPenguins = 18;

    var yeti = document.createElement("div");
    yeti.setAttribute("id", "yeti");
    var yetiNum = getRandomInt(0, numPenguins);
    var penguin;
    var gameholder = $("#gameholder");

    // yeti is placed if penguinNum == 9, then maxNum--
    var count = 0;
    for (var i = 0; i < numPenguins; i++){
        if (i != yetiNum){
            penguinNum = getRandomInt(1, 9);
            count++;
            penguin = document.createElement("div");
            penguin.setAttribute("class", ("penguin" + penguinNum.toString()));
            gameholder.append(penguin);
        }else{
            gameholder.append(yeti);
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

    var styleSheet = document.styleSheets[0];
    var allCSS = 
    [].slice.call(document.styleSheets)
        .reduce(function (prev, styleSheet) {
            if (styleSheet.cssRules) {
                return prev +
                    [].slice.call(styleSheet.cssRules)
                        .reduce(function (prev, cssRule) {
                            return prev + cssRule.cssText;
                        }, '');
            } else {
                return prev;
            }
        }, '');
    console.log(styleSheet);
    console.log(allCSS);
    
    var pengString;
    $("div[class*='penguin']").on("click", function(){
        pengString = $(this).attr('class');
        console.log(pengString);
        penguinNum = pengString.match(/\d ?/);
        $(this).css("background-image", "url('images/penguin_" + penguinNum + ".png')");
        
    }); 
    
    $("#yeti").mousedown(function(){
        alert("Yaaaarrrr!");
        
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
