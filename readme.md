# Instructions

Clone this repository and install the required modules with `npm install`. 

Open your terminal, and while you are in the directory with this repository, run `npm run test`. A dummy test has been written for this repository, and it should pass.

Further tests should be written in `test/TennisGame.spec.js`, and code for your TennisGame app should be written in `src/TennisGame.js`.

The rules for your app are defined below.

# Overview

Implement a simple TennisGame consisting of two players.

## Scoring Rules

- Scores from zero to three points are described as "**love**", "**fifteen**", "**thirty**", and "**forty**" respectively.

- If at least three points have been scored by each player, and the scores are equal, the score is "**deuce**".

- If the score is "**deuce**" and a player then scores an additional point over the other, the score is "**advantage**" for the player in the lead.

- A game is **won by the player 1 to reach four points** in total **or in a deuce at least two points more** than the opponent.

## Requirements

- If both players have the same points but less than three points each (e.g. 0-0, 1-1, or 2-2) then TennisGame should print "**{score} all**". For example, if both players have zero points, then TennisGame should print "**love all**".

- The player 1's score should always be printed before the player 2's score, like so:

  - If the player 1 has 1 point and the player 2 has 0 points, the game prints "**fifteen, love**".

  - If the player 1 has 0 points and the player 2 has 3 points, the game prints "**love, forty**".

  - If the player 1 has 2 points and the player 2 has 1 point, the game prints "**thirty, fifteen**".

- If a deuce is scored, then the game prints "**deuce!**".

- Once a deuce is scored, any point scored thereafter prints the advantage to the player. For example, if player 1 scores a point after deuce, the game prints "**advantage Player 1**".

- When a player wins a game, TennisGame should print "**Game, {winning player's name}**". For example, if player 1 wins a game, TennisGame prints "**Game, Player 1**".

## Further Requirements

- TennisGame can set the players names.

- TennisGame can display when a set is won (a set is won by the player who wins 6 games first).

- Each set can have tiebreakers, which are similar to deuce in games (i.e. if, within a set, games won are tied 5-5 by both players, one of the players needs to win 2 games more than the other to win that set).

- TennisGame can set the players' genders.

- TennisGame prints when the match is won by a player (men require 3 sets to win a match; women require 2 sets to win a match).
