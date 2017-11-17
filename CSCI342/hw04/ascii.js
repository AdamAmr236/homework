// Web Programming Step by Step
// ASCII Art String Maker JS file

"use strict";

var animating = false;
var animInterval = null;
var animationArray = null;
var animation = null;
var speed = 250;
var checkbox = null;
var animArea = null;
var count = 0;

// window.onload = function(){
//     animationSelect = document.getElementById("animation");
//     animationSelect.onchange = changeAnimation();
// }


window.onload = function(){
    checkbox = document.getElementById("checkBox");
    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
            speed = 50;
            if (animating){
                restartAnimation();
            }
        } else {
            speed = 250;
            if (animating){
                restartAnimation();
            }
        }
    });
}

function restartAnimation(){
    clearInterval(animInterval);
    var numAnims = animationArray.length;
    animInterval = setInterval(
        function(){
            animArea.innerHTML = animationArray[count]; 
            if(count == (numAnims - 1)){
                count = 0;
            }else{
                count++;
            }
        }, speed);
}

function startAnimation(){
    if (animating == false){
        animating = true;
        document.getElementById("animation").disabled = true;
        document.getElementById("fontSize").disabled = true;
        animArea = document.getElementById("inputarea");
        animation = animArea.value;
        animationArray = animation.split("=====");
        
        var numAnims = animationArray.length;
        for (var i = 1; i < numAnims; i++){
            animationArray[i] = animationArray[i].replace(/\n/, '');
        }
        count = 0;
        animInterval = setInterval(
            function(){
                animArea.innerHTML = animationArray[count]; 
                if(count == (numAnims - 1)){
                    count = 0;
                }else{
                    count++;
                }
            }, speed);
    }
}

function endAnimation(){
    if (animating == true){
        animating = false;
        document.getElementById("animation").disabled = false;
        document.getElementById("fontSize").disabled = false;
        clearInterval(animInterval);
        document.getElementById("inputarea").innerHTML = animation;
        console.log("End Animation");
        count = 0;
    }
}

function changeAnimation() {
    var animationSelect = document.getElementById("animation");
    var animation = ANIMATIONS[animationSelect.value];
    document.getElementById("inputarea").innerHTML = animation;
    // animationArray = animation.split("=====");
    // for (var i = 0; i < animationArray.length; i++){
    //     console.log(animationArray[i]);
    // }
}

function changeFontSize() {
    var fontSizeSelect = document.getElementById("fontSize");
    var fontSize = fontSizeSelect.value;
    console.log(fontSize);
    document.getElementById("inputarea").style.fontSize = fontSize;
}

