class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.playerMap = new PlayerMap();
    }

    show() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }

    walkDown() {
        this.y++;
    }

    walkUp() {
        this.x++;
    }

    direction() {

    }

    fire() {
        console.log("fire!")
    }
}
