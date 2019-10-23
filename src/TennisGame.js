const { validateScore } = require('./validation');
const ScoreBoard = require('./scoreboard');
const Player = require('./player');

class TennisGame {
	constructor(playerOneScore = 0, playerTwoScore = 0, isDeuce = false) {
		validateScore(playerOneScore);
		validateScore(playerTwoScore);

		this.playerOne = new Player(playerOneScore);
		this.playerTwo = new Player(playerTwoScore);
		this.scoreBoard = new ScoreBoard(this.playerOne, this.playerTwo, isDeuce);
    }
    
    setPlayerOneName(name) {
        this.playerOne.setName(name);
    }

	addScoreToPlayerOne() {
		this.playerOne.addScore();
	}

	addScoreToPlayerTwo() {
		this.playerTwo.addScore();
	}

	tallyScore() {
		return this.scoreBoard.getScore();
	}
}

module.exports = TennisGame;
