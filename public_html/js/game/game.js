// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 520;
canvas.height = 460;
if (document.getElementById('game').appendChild(canvas)) {
    console.log("true");
}

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "img/background1.png";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
heroImage.src = "img/ball.png";

// Game objects
var hero = {
    speed: 256 // movement in pixels per second
};

// sets or resets the starting point
var reset = function() {
    hero.x = 3;
    hero.y = canvas.height - 35;
};

// draw function
var render = function() {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height, 0, 0,
                canvas.width, canvas.height);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
};

// Check for collision with canvas width and height
var checkNoWallCollision = function(x, y) {
    if (x > canvas.width - 30 || x < 0 || y > canvas.height - 30 || y < 0) {
        return false;
    } else {
        return true;
    }
};

// Handle keyboard controls
addEventListener("keyup", function(e) {
    // Player pressed up
    if (e.keyCode === 38 && checkNoWallCollision(hero.x, hero.y - 30)) {
        hero.y -= 30;
    }
    // Player pressed down
    if (e.keyCode === 40 && checkNoWallCollision(hero.x, hero.y + 30)) {
        hero.y += 30;
    }
    // Player pressed left
    if (e.keyCode === 37 && checkNoWallCollision(hero.x - 30, hero.y)) {
        hero.x -= 30;
    }
    // Player pressed right
    if (e.keyCode === 39 && checkNoWallCollision(hero.x + 30, hero.y)) {
        hero.x += 30;
    }
    render();
}, false);

var update = function() {
    render();
};


//main 
reset();
setInterval(update, 1);