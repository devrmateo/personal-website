var start = Date.now();

var shape = document.getElementById("shape");

function getRandomColor() {

    var letters = "0123456789ABCDEF".split("");

    var color = "#";

    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * letters.length)];

    }

    return color;

}

function showCircleOrSquare() {

    if (Math.random() < .5) {

        shape.style.borderRadius = "50%";

    } else {

        shape.style.borderRadius = "0";
    }

}

function createShape() {

    var top = Math.random() * 450;

    var left = Math.random() * 1200;

    var widthAndheight = (Math.random() * 200) + 100;

    shape.style.display = "block";

    start = Date.now();

    showCircleOrSquare();

    shape.style.backgroundColor = getRandomColor();

    shape.style.top = top + "px";

    shape.style.left = left + "px";

    shape.style.width = widthAndheight + "px";

    shape.style.height = widthAndheight + "px";

}

function appearAfterDelay() {

    var randomInterval = Math.random() * 3000;

    setTimeout(createShape, randomInterval);

}

function disappearShape() {

    shape.onclick = function() {

        var end = Date.now();

        var reactionTime = (end - start) / 1000;

        shape.style.display = "none";

        document.getElementById("reactionTime").innerHTML = reactionTime + " s";

        appearAfterDelay();

    }

}

function runReactionTimer() {

    appearAfterDelay();
    disappearShape();

}

runReactionTimer();




