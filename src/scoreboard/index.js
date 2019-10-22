const SCORE_NAME_MAP = {
	0: 'love',
	1: 'fifteen',
	2: 'thirty',
	3: 'forty'
};

const DEUCE_SCORE = 'deuce';

class ScoreBoard {
	constructor(playerOneScore, playerTwoScore) {
		this.currentScore = this.compute(playerOneScore, playerTwoScore);
	}

	update(playerOneScore, playerTwoScore) {
        this.currentScore = this.compute(playerOneScore, playerTwoScore);
    }

	compute(playerOneScore, playerTwoScore) {
		if (playerOneScore === playerTwoScore) {
			if (playerOneScore > 2) return DEUCE_SCORE;
			return `${SCORE_NAME_MAP[playerOneScore]} all`;
		}
    }
    
    retrieve() {
        return this.currentScore;
    }
}

// checkScore(playerOneScore = 0, playerTwoScore = 0) {
// 	if (playerOneScore === playerTwoScore) {
// 		if (playerOneScore > 2) return DEUCE_SCORE;
// 		return `${SCORE_NAME_MAP[playerOneScore]} all`;
// 	}
// }

module.exports = ScoreBoard;
