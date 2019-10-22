import Player from '../player'

class ScoreBoard {
    constructor(playerOneName = "Player 1", playerTwoName = "Player 2") {
        this.playerOne = new Player(playerOneName)
        this.playerTwo = new Player(playerTwoName)
    }
}

module.exports = ScoreBoard;