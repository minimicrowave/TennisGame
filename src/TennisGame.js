const { validateScore } = require('./validation');

class TennisGame {
	constructor(playerOneScore, playerTwoScore) {
		validateScore(playerOneScore);
		validateScore(playerTwoScore);
		console.log('hi', tennisGame);
	}
}

module.exports = TennisGame;
