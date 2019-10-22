const { validateScore } = require('./validation');
const { checkScore } = require('./scoreboard');
const Player = require('./player');

class TennisGame {
	constructor(playerOneScore = 0, playerTwoScore = 0) {
		validateScore(playerOneScore);
		validateScore(playerTwoScore);

		this.playerOne = new Player(playerOneScore);
		this.playerTwo = new Player(playerTwoScore);
	}

	addScoreToPlayerOne() {
		this.playerOne.addScore();
	}

	addScoreToPlayerTwo() {
		this.playerTwo.addScore();
	}

	tallyScore() {
		return checkScore(this.playerOne.score, this.playerTwo.score);
	}
}

module.exports = TennisGame;
