// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
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

// Reset the game when the player catches a monster
var reset = function() {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    // Throw the monster somewhere on the screen randomly
//	monster.x = 32 + (Math.random() * (canvas.width - 64));
//	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// draw function
var render = function() {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
};

// Update game objects
var update = function(modifier) {
    if (38 in keysDown) { // Player holding up
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) { // Player holding down
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) { // Player holding left
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { // Player holding right
        hero.x += hero.speed * modifier;
    }
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);

//main 
var main = function() {
    console.log("mainia kutsuttu")
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;
};

reset();
var then = Date.now();
setInterval(main, 1);