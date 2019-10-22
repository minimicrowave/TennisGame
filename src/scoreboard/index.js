const SCORE_NAME_MAP = {
	0: 'love',
	1: 'fifteen',
	2: 'thirty',
	3: 'forty'
};

function checkScore(playerOneScore = 0, playerTwoScore = 0) {
	if (playerOneScore === playerTwoScore) return SCORE_NAME_MAP[playerOneScore];
	return `hello, ${playerOneScore}, ${playerTwoScore}`;
}

module.exports = { checkScore };
