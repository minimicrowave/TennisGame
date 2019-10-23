class Player {
	constructor(score = 0, name) {
		this.score = score;
		this.name = name;
	}

	addScore() {
		this.score += 1;
	}

	setName(name) {
		this.name = name;
	}
}

module.exports = Player;
