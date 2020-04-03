let wordWidth = 135, wordWidthTarget = document.getElementById("wordInside").offsetWidth+10, wordNum = 0;
let words = ['Gregory', 'a Developer', 'a Designer'];
let fps = 70;

setInterval(wordCursor, (10*fps));
setInterval(wordUpdate, (1000/fps));
setInterval(bgUpdate, (1000/fps));

function wordCursor() {
    if(document.getElementById("word").style.borderRight == "") document.getElementById("word").style.borderRight = "2px solid #fff";
    else document.getElementById("word").style.borderRight = "";
}

function wordNext() {
    wordNum++;
    if(wordNum == words.length) wordNum = 0;
    document.getElementById("wordInside").innerHTML = "I Am " + words[wordNum];
    wordWidthTarget = document.getElementById("wordInside").offsetWidth+10;
}

function wordUpdate() {
    wordWidth = wordWidth+(wordWidthTarget-wordWidth)*0.05;
    document.getElementById("word").style.width = wordWidth + "px";

    if(Math.round(wordWidth) == wordWidthTarget) wordWidthTarget = 135;
    if(Math.round(wordWidth) == 135) wordNext();
}

function bgUpdate() {
    document.getElementsByTagName("header")[0].style.backgroundPosition = "0 "+ window.pageYOffset/2 + "px";
}