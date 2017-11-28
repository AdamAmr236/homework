
// //This code will run after your page loads
// console.log("Test");
// document.getElementById("yeti").addEventListener("click", myFunction);

// myFunction(){
//     alert("Yaaaarrrr!");
// };
"use strict";

window.onload = function(){
    var yetiSet = false;
    var penguinNum;
    var numPenguins = 28;

    // changed yeti to id instead of class, so I give the yeti and the penguins different elements
    var yeti = document.createElement("div");
    yeti.setAttribute("id", "yeti");
    var penguin;
    var gameholder = document.getElementById("gameholder");

    for (var i = 0; i < numPenguins - 1; i++){
        penguinNum = getRandomInt(0, 10);
        if (penguinNum == 9){
            if (yetiSet == false){
                gameholder.appendChild(yeti);
                yetiSet = true;
            }else{
                penguinNum = getRandomInt(0, 9);
                penguin = document.createElement("div");
                penguin.setAttribute("class", ("penguin" + penguinNum.toString()));
                gameholder.appendChild(penguin);
            }
        }else{
            penguin = document.createElement("div");
            penguin.setAttribute("class", ("penguin" + penguinNum.toString()));
            gameholder.appendChild(penguin);
            console.log(penguinNum)
        }
    }
    // if the yeti isn't set by the last
    if (yetiSet == false){
        gameholder.appendChild(yeti);
        yetiSet = true;
    } 
    var penguinArray = document.getElementsByClassName("") 

    var yeti = document.getElementById("yeti");
    
    yeti.addEventListener( "click", function() {
        alert("Yaaaarrrr!");
    });

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
