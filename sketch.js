let player;
let playerMap;

function setup() {
    playerMap = new PlayerMap();
    createCanvas(playerMap.x, playerMap.y);
    player = new Player();
}

function draw() {
    // background of the map
    background(51);

    player.show();

    // draw a line from the middle of the screen
    line(0, playerMap.size / 2, playerMap.size, playerMap.size / 2);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        player.walkUp();
    } else if (keyCode === DOWN_ARROW) {
        // do stuff
        player.walkDown();
    } else if (keyCode === RIGHT_ARROW) {
        // do stuff
    } else if (keyCode === LEFT_ARROW) {
        // do stuff
    }
}

function mouseClicked() {
    player.fire();
}
