const { POINTS } = require('../../constants');

class Player {
    constructor(playerName) {
        this.name = playerName;
        this.points = POINTS.STARTING;
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
