const TennisGame = require('../src/TennisGame');
const { expect } = require('chai');

describe('TennisGame', () => {
    function setGameToDeuce(tennisGame) {
        tennisGame.addPointToPlayerOne();
        tennisGame.addPointToPlayerOne();
        tennisGame.addPointToPlayerOne();
        tennisGame.addPointToPlayerTwo();
        tennisGame.addPointToPlayerTwo();
        tennisGame.addPointToPlayerTwo();
    }

    describe('.score()', () => {
        it('should return "love all" right after initialization', () => {
            const game = new TennisGame();
            expect(game.score()).to.equal('love all');
        });

        it('should return "fifteen, love" after player 1 scores a point', () => {
            const game = new TennisGame();
            game.addPointToPlayerOne();
            expect(game.score()).to.equal('fifteen, love');
        });

        it('should return "fifteen all" after both players score a point', () => {
            const game = new TennisGame();
            game.addPointToPlayerOne();
            game.addPointToPlayerTwo();
            expect(game.score()).to.equal('fifteen all');
        });

        it('should return "thirty love" if after player 1 scores 2 points', () => {
            const game = new TennisGame();
            game.addPointToPlayerOne();
            game.addPointToPlayerOne();
            expect(game.score()).to.equal('thirty, love');
        });

        it('should return "love, forty" if after player 2 scores 3 points', () => {
            const game = new TennisGame();
            game.addPointToPlayerTwo();
            game.addPointToPlayerTwo();
            game.addPointToPlayerTwo();
            expect(game.score()).to.equal('love, forty');
        });

        it('should return "deuce!" if both players have scored 3 points or are tied at above 3 points', () => {
            const game = new TennisGame();
            setGameToDeuce(game);
            expect(game.score()).to.equal('deuce!');
            game.addPointToPlayerOne();
            game.addPointToPlayerTwo();
            expect(game.score()).to.equal('deuce!');
        });

        it('should return "advantage, Player 1" if player 1 scores an advantage point', () => {
            const game = new TennisGame();
            setGameToDeuce(game);
            game.addPointToPlayerOne();
            expect(game.score()).to.equal('advantage, Player 1');
        });

        it('should return "advantage, Player 2" if player 2 scores an advantage point', () => {
            const game = new TennisGame();
            setGameToDeuce(game);
            game.addPointToPlayerTwo();
            expect(game.score()).to.equal('advantage, Player 2');
        });

        it('should return "Game, {winningPlayer}" if player wins a game', () => {
            let game = new TennisGame();
            game.addPointToPlayerOne();
            game.addPointToPlayerOne();
            game.addPointToPlayerOne();
            game.addPointToPlayerOne();
            expect(game.score()).to.equal('Game, Player 1');
            game = new TennisGame();
            game.addPointToPlayerTwo();
            game.addPointToPlayerOne();
            game.addPointToPlayerOne();
            game.addPointToPlayerTwo();
            game.addPointToPlayerTwo();
            game.addPointToPlayerTwo();
            expect(game.score()).to.equal('Game, Player 2');
        });

        it('should return "Game, {winningPlayer}" if player wins a game after a deuce', () => {
            let game = new TennisGame();
            setGameToDeuce(game);
            game.addPointToPlayerOne();
            game.addPointToPlayerOne();
            expect(game.score()).to.equal('Game, Player 1');
            game = new TennisGame();
            setGameToDeuce(game);
            game.addPointToPlayerTwo();
            game.addPointToPlayerTwo();
            expect(game.score()).to.equal('Game, Player 2');
        });
    });

    describe('.constructor()', () => {
        it('should allow players names to be set', () => {
            const game = new TennisGame('Ezekiel', 'Ozymandias');
            setGameToDeuce(game);
            game.addPointToPlayerOne();
            expect(game.score()).to.equal('advantage, Ezekiel');
            game.addPointToPlayerTwo();
            game.addPointToPlayerTwo();
            expect(game.score()).to.equal('advantage, Ozymandias');
        });
    });
});