const DEFAULT_POINTS = 0;

class Player {
    constructor(playerName) {
        this.name = playerName;
        this.points = DEFAULT_POINTS;
    }

    getPoints() {
        return this.points;
    }

    getName() {
        return this.name;
    }

    addPoint() {
        this.points++;
    }
}

module.exports = Player;
