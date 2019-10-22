function checkScore(playerOneScore = 0, playerTwoScore = 0) {
	if (playerOneScore === playerTwoScore) {
		if (playerOneScore === 0) return 'love';
		if (playerOneScore === 1) return 'fifteen';
		if (playerOneScore === 2) return 'thirty';
		if (playerOneScore === 3) return 'forty';
	}
	return `hello, ${playerOneScore}, ${playerTwoScore}`;
}

module.exports = { checkScore };
 