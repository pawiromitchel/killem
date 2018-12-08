class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 10;
        this.height = 10;
        this.playerMap = new PlayerMap();

        this.speed = 20;
    }

    show() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    walkUp() {
        let newCoordinates = (this.y - this.speed);
        if (newCoordinates >= 0) {
            this.y = newCoordinates;
        }
    }

    walkDown() {
        this.y = (this.y + this.speed);
    }

    walkLeft() {
        let newCoordinates = (this.x - this.speed);
        if (newCoordinates >= 0) {
            this.x = newCoordinates;
        }
    }

    walkRight() {
        let newCoordinates = (this.x + this.speed);
        if (newCoordinates < this.playerMap.x) {
            this.x = newCoordinates;
        }
    }

    fire() {
        console.log("fire!");

        fill(255);
        rect(this.x + 10, this.y + 10, this.width, this.height);
    }
}
