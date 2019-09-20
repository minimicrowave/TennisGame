const formatter = require('../../formatter');
const { POINTS } = require('../../constants');
const { DIFFERENCE, DEUCE, WIN } = POINTS;

class GameService {
    constructor() {
        this.playerOne;
        this.playerTwo;
    }

    calculateScore(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;

        if (this.isWin()) {
            return formatter.win(this.getWinningPlayerName());
        } else if (this.isAdvantage()) {
            return formatter.advantage(this.getWinningPlayerName());
        } else if (this.isDeuce()) {
            return formatter.deuce();
        } else if (this.isDraw()) {
            return formatter.draw(this.playerOne.getPoints());
        }
        return formatter.score(this.playerOne.getPoints(), this.playerTwo.getPoints());
    }

    getWinningPlayerName() {
        return this.playerOne.getPoints() > this.playerTwo.getPoints()
            ? this.playerOne.getName()
            : this.playerTwo.getName();
    }

    isAdvantage() {
        return (
            this.playerOne.getPoints() + this.playerTwo.getPoints() > DEUCE + DEUCE &&
            this.hasPointDifferenceOfAtLeast(DIFFERENCE.ADVANTAGE)
        );
    }

    hasPointDifferenceOfAtLeast(difference) {
        return Math.abs(this.playerOne.getPoints() - this.playerTwo.getPoints()) >= difference;
    }

    isDeuce() {
        return this.playerOne.getPoints() === this.playerTwo.getPoints() 
            && this.playerOne.getPoints() >= DEUCE;
    }

    isDraw() {
        return this.playerOne.getPoints() === this.playerTwo.getPoints();
    }

    isWin() {
        return (
            (this.playerOne.getPoints() >= WIN || this.playerTwo.getPoints() >= WIN) &&
            this.hasPointDifferenceOfAtLeast(DIFFERENCE.WIN)
        );
    }
}

module.exports = GameService;
