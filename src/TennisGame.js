const { validateScore } = require('./validation');

class TennisGame {
	constructor(playerOneScore, playerTwoScore) {
		validateScore(playerOneScore);
		validateScore(playerTwoScore);

		this.playerOne = new Player(playerOneName);
		this.playerTwo = new Player(playerTwoName);
	}

    tallyScore() {}
    
}

module.exports = TennisGame;
